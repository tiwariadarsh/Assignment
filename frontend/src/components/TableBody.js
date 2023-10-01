import React from 'react'
import loader from "../loader.gif";
import Row from './Row';

export const TableBody = ({transactions, isTableLoading}) => {
  return (
    <div>
        <div className='table-body flex flex-column'>
        {
            isTableLoading ? <div className="tableLoading"><img src={loader} alt = "Loading"/></div>
            : (transactions.length ? transactions.map((transaction, idx) => <Row 
            transaction = {transaction}
            id={idx}
            /> ) : <div className='loader'>No data Found...</div>)
        }
    </div>
    </div>
  )
}
