import React from "react";

function Demo() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header-container">
          <div className="header-top">
            <img src="/images/logo.png" width={147} height={83} alt="logo" />
            <div className="header-top">
              <ul>
                <li className="menu-item">
                  <a href="#" className="menu-link">
                    Home
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-link">
                    Careers
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-link">
                    Blog
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-link">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Demo;
