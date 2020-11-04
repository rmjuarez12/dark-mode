// Import Dependencies
import React from "react";
import { Route } from "react-router-dom";

// Import Components
import Chart from "./Chart";

const Charts = ({ coinData, darkMode }) => {
  return (
    <div className='charts'>
      {coinData.map((coin) => (
        <Route path={`/${coin.symbol}`} key={coin.name}>
          <div className='chart__container'>
            <h2 className='coin__title'>{coin.name}</h2>
            <h4 className='coin__symbol'>{coin.symbol}</h4>
            <div className='coin__logo'>
              <img src={coin.image} height='40' alt={coin.name} />
            </div>
            <Chart
              sparklineData={coin.sparkline_in_7d.price}
              darkMode={darkMode}
            />
          </div>
        </Route>
      ))}
    </div>
  );
};
export default Charts;
