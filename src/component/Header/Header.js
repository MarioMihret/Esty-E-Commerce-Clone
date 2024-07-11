import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          
            <div className="logo-container">
              <span className="logo-text">Mario</span>
              <div className="logo-accent"></div>
            </div>
          
        </div>
        <nav className="nav">
          <ul>
            <li><a href="/sell">Sell on Etsy</a></li>
            <li><a href="/shops">Shops</a></li>
            <li><a href="/discover">Discover</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/signin">Sign in</a></li>
          </ul>
        </nav>
        <div className="search">
          <input type="text" placeholder="Search for anything" />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;