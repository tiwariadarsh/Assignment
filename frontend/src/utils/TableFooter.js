import React from 'react'
import "../styles/TableFooter.css"

export const TableFooter = ({onPage, currentPage, totalPage}) => {
  return (
    <div className='table-footer'>
     <button onClick={() => onPage()}>Next Page</button>
       Page <span>{currentPage} </span>
      of <span> {totalPage}</span>
    </div>
  )
}
