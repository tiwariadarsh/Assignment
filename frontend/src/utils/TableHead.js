import React from 'react'
import '../styles/TableHead.css'
import { transactionKeys } from './coloumnHeaders'
import HeadRow from '../components/HeadRow'


const TableHead = () => {
  return (
    <div className='table-head flex'>
        <HeadRow
           transactions = {transactionKeys}
        />
    </div>
  )
}

export default TableHead