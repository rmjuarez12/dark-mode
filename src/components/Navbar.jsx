// Import Dependencies
import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = (props) => {
  const toggleMode = (e) => {
    e.preventDefault();
    props.setDarkMode(!props.darkMode);
  };
  return (
    <header className='navbar'>
      <h1 className='logo'>
        <Link to='/'>Crypto Tracker</Link>
      </h1>

      <nav>
        {props.coinData.map((item) => {
          return (
            <NavLink
              to={`/${item.symbol}`}
              key={item.name}
              activeClassName='active'
            >
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      <div className='dark-mode__toggle'>
        <div
          onClick={toggleMode}
          className={props.darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </header>
  );
};

export default Navbar;
