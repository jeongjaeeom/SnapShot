import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/gif">gif</NavLink></li>
        <li><NavLink to="/jpg">jpg</NavLink></li>
        <li><NavLink to="/png">png</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
