import React from "react";

function Sunny() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="container">
          <img srcSet="/logo.png 2x" alt="Logo" />
          <ul className="menu">
            <li className="menu-item">
              <a href="/">Home</a>
            </li>
            <li className="menu-item">
              <a href="/">Destinations</a>
            </li>
            <li className="menu-item">
              <a href="/">About</a>
            </li>
            <li className="menu-item">
              <a href="/">Partner</a>
            </li>
            <div className="menu-auth">
              <button className="btn">Login</button>
              <button className="btn">Register</button>
            </div>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Sunny;
