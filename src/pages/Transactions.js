// src/pages/Transactions.js
import React from "react";
import TransactionList from "../components/TransactionList";

const Transactions = ({ transactions }) => {
  return (
    <div className="transactions">
      <h1>All Transactions</h1>
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default Transactions;
