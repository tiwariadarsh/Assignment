import React from 'react'
import '../styles/Row.css'
import { headerRowStyle } from '../utils/RowConstant'
import Cell from './Cell'


const HeadRow = ({transactions}) => {
  return (
    <div className='head-row row flex' style={headerRowStyle} >
        {Object.entries(transactions).map(([keyName, value]) => 
            <Cell value = {value} />
        )}
    </div>
  )
}

export default HeadRow