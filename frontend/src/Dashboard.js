import React, { useEffect, useState } from "react";
import TransactionList from "./components/TransactionList";
import TransactionFilter from "./components/TransactionFilter";
import TransactionSort from "./components/TransactionSort";
import AddTransaction from "./components/AddTransaction";
import GenerateReport from "./components/GenerateReport";
import CronControl from "./components/CronControl";

import "./Dashboard.css";
import { addTransaction } from "./apiCalls/addTransactionApi.js";
import { getTransactions } from "./apiCalls/getTransactionsApi";
import { generateReport } from "./apiCalls/generateReportApi";
import { startCronJob, stopCronJob } from "./apiCalls/cronControlApi";
import TransactionReportResult from "./components/TransactionReportResult";
import JsonToCsvConverter from "./components/JsonToCsvConverter";

function Dashboard({ JWTtoken }) {
  const [tableLoading, settableLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [totalPage, settotalPage] = useState(0);
  const [currentPage, setcurrentPage] = useState(0);
  const [transactionReport, settransactionReport] = useState({});
  const [showtransactionReport, setshowtransactionReport] = useState(false);
  const [reportDuration, setreportDuration] = useState();
  const [isCronRunning, setIsCronRunning] = useState(false);
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    minAmount: "",
    maxAmount: "",
    sortBy: "dateTime",
    sortOrder: "desc",
    description: "",
  });

  // Handle filter changes
  const handleFilter = (filterData) => {
    setFilters(filterData);
  };

  // Handle sorting changes
  const handleSort = (sortOption, order) => {
    setFilters({ ...filters, sortBy: sortOption, sortOrder: order });
  };

  // Add a new transaction
  const handleAddTransaction = (newTransaction) => {
    addTransaction(newTransaction);
  };

  // Generate a report
  const handleGenerateReport = (reportCriteria) => {
    setreportDuration(reportCriteria);
  };

  // Start the cron job
  const handleStartCron = () => {
    startCronJob();
    setIsCronRunning(true);
  };

  // Stop the cron job
  const handleStopCron = () => {
    stopCronJob();
    setIsCronRunning(false);
  };

  const handleReportClose = () => {
    setshowtransactionReport(false);
  };

  useEffect(() => {
    settableLoading(true);
    getTransactions(filters)
      .then((res) => {
        setTransactions(res?.transactions);
        settotalPage(res?.totalPages);
        setcurrentPage(res?.currentPage);
        settableLoading(false);
      })
      .catch((err) => {
        settableLoading(false);
      });
  }, []);

  useEffect(() => {
    settableLoading(true);
    getTransactions(filters, currentPage)
      .then((res) => {
        setTransactions(res?.transactions);
        settableLoading(false);
      })
      .catch((err) => {
        settableLoading(false);
      });
  }, [currentPage, filters]);

  useEffect(() => {
    settableLoading(true);
    getTransactions(filters)
      .then((res) => {
        setTransactions(res?.transactions);
        settotalPage(res?.totalPages);
        setcurrentPage(res?.currentPage);
        settableLoading(false);
      })
      .catch((err) => {
        settableLoading(false);
      });
  }, [filters]);

  useEffect(() => {
    if (reportDuration) {
      settableLoading(true);
      generateReport(reportDuration)
        .then((res) => {
          settransactionReport(res);
          setshowtransactionReport(true);
          settableLoading(false);
        })
        .catch((err) => {
          settableLoading(false);
        });
    }
  }, [reportDuration]);

  const handleNextPage = () => {
    let nextPage = currentPage + 1;
    if (nextPage > totalPage) nextPage = 1;
    setcurrentPage(nextPage);
  };
  window.addEventListener("unload", function () {
    if (!isCronRunning) return;
    stopCronJob();
    setIsCronRunning(false);
  });

  return (
    <div className="dashboard">
      <h2>Transaction API Dashboard</h2>
      <div className="content">
        <div className="dashboard_right">
          <CronControl
            isCronRunning={isCronRunning}
            onStartCron={handleStartCron}
            onStopCron={handleStopCron}
          />
          <TransactionFilter onFilter={handleFilter} />
          <TransactionSort onSort={handleSort} />
          <AddTransaction onAdd={handleAddTransaction} />
          <GenerateReport onGenerate={handleGenerateReport} />
          <JsonToCsvConverter transactions={transactions} />
        </div>
        <div className="dashboard_left">
          <TransactionList
            tableLoading={tableLoading}
            transactions={transactions}
            totalPage={totalPage}
            currentPage={currentPage}
            onPage={handleNextPage}
          />
        </div>
      </div>
      {showtransactionReport && (
        <TransactionReportResult
          handleReportClose={handleReportClose}
          reportDuration={reportDuration}
          transactionReport={transactionReport}
        />
      )}
    </div>
  );
}

export default Dashboard;