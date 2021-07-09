// Import Dependencies
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import Components
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";

// Import Hooks
import { useDarkMode } from "./hooks/useDarkMode";

// Import Assets
import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [darkMode, setDarkMode] = useDarkMode();

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then((res) => setCoinData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Router>
      <div className={darkMode ? "dark-mode App" : "App"}>
        <Navbar
          darkMode={darkMode}
          coinData={coinData}
          setDarkMode={setDarkMode}
        />

        <Route path='/' exact>
          <HomePage />
        </Route>

        <Charts coinData={coinData} darkMode={darkMode} />
      </div>
    </Router>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
