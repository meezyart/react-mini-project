import React from 'react';
import NavBar from '../../components/Navbar/';
import logo from './img/atlassian-logo-nav.png'
import sumlogo from './img/atlassian-summit-logo.png'

import './header.css';

const Header = () => (
  <header className="hero is-medium">
    <div className="hero-head is-info">
      <nav className="navbar  ">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img
                src={logo}
                alt="Logo"
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
    <div className="hero-body">
      <div className="container has-text-centered">
        <img
          src={sumlogo}
          alt="Logo"
        />
      </div>
    </div>
    <div className="hero-foot">
      <NavBar />
    </div>
  </header>
);

export default Header;
