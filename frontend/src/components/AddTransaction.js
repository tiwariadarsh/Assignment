import React, { useState } from "react";
import "../styles/AddTransaction.css";
import { generateTransactionID } from "../generateTransactionID";

const AddTransaction = ({ onAdd }) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const handleAdd = () => {
    const currentDate = new Date(); // current date and time
    const currentDateTime = currentDate.toISOString();
    onAdd({
      dateTime: currentDateTime,
      amount: parseInt(amount),
      description,
      transactionID: generateTransactionID(),
    });
    setAmount("");
    setDescription("");
  };

  return (
    <div className="addTransaction">
      <h2>Add a Transaction</h2>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Detail of Transaction:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button onClick={handleAdd}>Add Transaction</button>
    </div>
  );
};

export default AddTransaction;