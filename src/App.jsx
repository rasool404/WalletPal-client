import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import AddTransactionPage from "./pages/AddTransactionPage";
import "./App.css";
import SignIn from "./pages/SingIn";
import Navigation from "./components/Navigation";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignUp from "./pages/SignUp";
import { Container, CssBaseline } from "@mui/material";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const defaultTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  return (
    <Router>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />

        <div className="App">
          <Navigation />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/transactions">Transactions</Link>
              </li>
              <li>
                <Link to="/add-transaction">Add Transaction</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home transactions={transactions} />} />
            <Route
              path="/transactions"
              element={<Transactions transactions={transactions} />}
            />
            <Route
              path="/add-transaction"
              element={<AddTransactionPage addTransaction={addTransaction} />}
            />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
