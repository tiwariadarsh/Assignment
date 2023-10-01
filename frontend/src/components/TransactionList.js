import React from "react";
//import "../styles/TransactionList.css";
import { convertISOToHumanReadable } from "../convertISOToHumanReadable";
import TableHead from "../utils/TableHead";
import "../styles/Table.css"
import { TableBody } from "./TableBody";

const TransactionList = ({ transactions, onPage, currentPage, totalPage, isTableLoading }) => {
  return (
    // <div className="transactionList">
    //   <h2>List of Transactions</h2>
    //   <table>
    //     {isTableLoading&&<div className="tableLoading"><img src={loader} alt = "Loading"/></div>}
    //     <thead>
    //       <tr>
    //         <th>Date</th>
    //         <th>Amount</th>
    //         <th>Description</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {transactions.map((transaction, index) => (
    //         <tr key={index}>
    //           <td>{convertISOToHumanReadable(transaction.dateTime)}</td>
    //           <td>{transaction.amount}</td>
    //           <td>{transaction.description}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    //   <div className="transactionList-pagenum">
    //   <button onClick={() => onPage()}>Next Page</button>
    //     Page
    //     <span>{currentPage}</span>
    //     of
    //     <span>{totalPage}</span>
    //   </div>
    // </div>
    <div className='flex flex-column'>
    <div className='table flex flex-column'>
    <TableHead />
    <TableBody transactions = {transactions} isTableLoading = {isTableLoading} />
</div>
<div className="transactionList-pagenum">
     <button onClick={() => onPage()}>Next Page</button>
       Page <span>{currentPage} </span>
      of <span> {totalPage}</span>
    </div>
</div>
  );
};

export default TransactionList;