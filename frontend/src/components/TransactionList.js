import React from "react";
import TableHead from "../utils/TableHead";
import "../styles/Table.css"
import { TableBody } from "./TableBody";
import { TableFooter } from "../utils/TableFooter";

const TransactionList = ({ transactions, onPage, currentPage, totalPage, isTableLoading }) => {
  return (
    <>
    <div className='flex flex-column'>
    <div className='table flex flex-column'>
    <TableHead />
    <TableBody transactions = {transactions} isTableLoading = {isTableLoading} />
</div>
 <TableFooter onPage = {onPage} currentPage = {currentPage} totalPage = {totalPage} />
 </div>
 </>
 )
};

export default TransactionList;