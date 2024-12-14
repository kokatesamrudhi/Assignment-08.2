import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Connectwallet from "./pages/Connectwallet.jsx";
import Selectaccount from "./pages/Selectaccount.jsx";
import Swap from "./pages/Swap.jsx";
import Selectatoken from "./pages/Selectatoken.jsx";
import Managelist from "./pages/Managelist.jsx";
import Managetoken from "./pages/Managetoken.jsx";
import Fill from "./pages/Fill.jsx";
import Transaction from "./pages/Transaction.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Connectwallet" element={<Connectwallet />} />
        <Route path="/Selectaccount" element={<Selectaccount />} />
        <Route path="/Swap" element={<Swap />} />
        <Route path="/Selectatoken" element={<Selectatoken />} />
        <Route path="/Managelist" element={<Managelist />} />
        <Route path="/Managetoken" element={<Managetoken />} />
        <Route path="/Fill" element={<Fill />} />
        <Route path="/Transaction" element={<Transaction />} />
      </Routes>
    </Router>
  );
};

export default App;
