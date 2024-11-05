import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row align-items-start">
          {/* Logo Section */}
          <div className="col-6 logo-container">
            <div className="logo">
              <svg
                width="84"
                height="59"
                viewBox="0 0 84 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG path for logo */}
                <path d="M75.4839 10.0364C68.1981 3.37668 56.9558 0 42.0686 0C27.1789 0 15.9148 3.3754 8.59052 10.0325C1.11615 16.8244 0 24.9569 0 29.1995C0 33.4422 1.11615 41.576 8.59052 48.3678C15.9148 55.025 27.1789 58.4004 42.0699 58.4004C56.9571 58.4004 68.1994 55.0237 75.4852 48.364C82.8941 41.5901 84 33.4499 84 29.1995C83.9987 24.9505 82.8928 16.809 75.4839 10.0364ZM42.0686 56.1976C9.89783 56.1976 2.20408 39.9723 2.20408 29.2008C2.20408 18.4306 9.89783 2.20408 42.0686 2.20408C74.2407 2.20408 81.7946 18.4293 81.7946 29.2008C81.7946 39.971 74.2407 56.1976 42.0686 56.1976Z"></path>
                {/* Additional SVG paths */}
              </svg>
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="col-6 d-flex justify-content-end d-md-none">
            <p className="menu-trigger type-button">Menu</p>
          </div>

          {/* Desktop Navigation */}
          <div className="col-6 d-none d-md-flex justify-content-end">
            <a className="type-button item" href="/dead-wallabies/">
              Latest
            </a>
            <div className="dropdown">
              <p className="type-button item">Interventions</p>
            </div>
            <a
              aria-current="page"
              className="type-button item is-active"
              href="/about/"
            >
              About Rouser
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
