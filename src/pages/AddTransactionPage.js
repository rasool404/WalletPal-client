// src/pages/AddTransactionPage.js
import React from "react";
import AddTransaction from "../components/AddTransaction";

const AddTransactionPage = ({ addTransaction }) => {
  return (
    <div className="add-transaction-page">
      <h1>Add New Transaction</h1>
      <AddTransaction addTransaction={addTransaction} />
    </div>
  );
};

export default AddTransactionPage;
