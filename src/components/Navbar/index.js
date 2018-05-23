import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import './navbar.css'

const NavBar = ({ nav, section, match }) => {
  const renderNavItem = (item, index) => {
    let active;
    if (section.title) {
      active = section.title === item.title ? 'is-active' : '';
    } else {
      active = index === 0 ? 'is-active' : '';
    }
    return (
        <li key={index} className={active}>
          <Link  to={`/${item.title}`}>
            <span>{item.title}</span>
          </Link>
        </li>
        )
      ;
  };
  return (
    <div className="container">
      <div className="tabs is-boxed">
        <ul>
          {nav ? (
            Object.keys(nav).map((item, index) =>
              renderNavItem(nav[item], index)
            )
          ) : (
            <div>Loading Nav</div>
          )}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  nav: state.nav,
  section: state.section
});

export default connect(mapStateToProps)(NavBar);
