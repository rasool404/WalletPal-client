// src/components/AddTransaction.js
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTransaction = ({ addTransaction }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: uuidv4(),
      description,
      amount: parseFloat(amount),
    };
    addTransaction(newTransaction);
    setDescription("");
    setAmount(0);
  };

  return (
    <div className="add-transaction">
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
