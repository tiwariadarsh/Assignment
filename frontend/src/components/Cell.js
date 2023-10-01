import React from 'react'
import '../styles/Cell.css'

const Cell = ({value}) => {
  return (
    <div className='cell flex'>{value}</div>
  )
}

export default Cell