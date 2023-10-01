import React from 'react'
import '../styles/Row.css'
import Cell from './Cell'
import { evenRowStyle, headerRowStyle, oddRowStyle } from '../utils/RowConstant'

const Row = ({id, transaction}) => {
    const rowStyle = (id ===-1 ? headerRowStyle :  (id%2 === 0 ? evenRowStyle : oddRowStyle));
  return (
    <div className='row flex ' style={rowStyle} data-testid = "single-transaction">
         <Cell value = {transaction.transactionID} />
         <Cell value={transaction.dateTime} />
         <Cell value={transaction.amount} data-testid = "eejjkk" />
         <Cell value={transaction.description} />
    </div>
  )
}

export default Row