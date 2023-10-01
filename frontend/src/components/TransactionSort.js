import React, { useState } from "react";
import "../styles/TransactionSort.css";

const TransactionSort = ({ onSort }) => {

  const [sortOption, setSortOption] = useState("dateTime");
  const [sortingOrder, setSortingOrder] = useState("desc");
  
  const onreset = () => {
    setSortOption("dateTime")
    setSortingOrder("desc");
    onSort("dateTime", "desc");
  }
  
  const handleSort = () => {
    onSort(sortOption, sortingOrder);
  };

  return (
    <div className="transactionSort">
      <h2>Transaction Sorting</h2>
      <div className="sortOptions">
        <span>Sort by:</span>
        <div className="temp">
            <input
              type="radio"
              name="sortOption"
              value="dateTime"
              checked={sortOption === "dateTime"}
              onChange={() => setSortOption("dateTime")}
            />
            <label for="html">Date</label>
      </div>
      <div className="temp">
            <input
              type="radio"
              name="sortOption"
              value="amount"
              data-testid = "amount-sorting-button"
              checked={sortOption === "amount"}
              onChange={() => setSortOption("amount")}
            />
            <label for="html">Amount</label>
         </div>
    
      </div>
      <div className="sortingOrderOptions">
        <span>Sorting Order:</span>
        <div className="temp">
         
            <input
              type="radio"
              name="sortingOrder"
              value="asc"
              data-testid = "asc-sorting-button"
              checked={sortingOrder === "asc"}
              onChange={() => setSortingOrder("asc")}
            />
            <label for="html">Asc</label>
          
      </div>
     
      <div className="temp">
            <input
              type="radio"
              name="sortingOrder"
              value="desc"
              checked={sortingOrder === "desc"}
              onChange={() => setSortingOrder("desc")}
            />
            <label for="html">Desc</label>
          
       </div>
      </div>
      <span><button onClick={handleSort}>Apply Sorting</button>
      <button onClick={onreset}>Reset</button></span>
      
    </div>
  );


};

export default TransactionSort;

// The `TransactionSort` component in React provides a user interface for sorting transactions.
//  It allows users to choose a sorting option (e.g., by date or amount) and a sorting order
//  (ascending or descending). When the "Apply Sorting" button is clicked, it sends the selected
//  sorting criteria to a parent component via the `onSort` prop, enabling the sorting of transactions
//   based on user preferences.
