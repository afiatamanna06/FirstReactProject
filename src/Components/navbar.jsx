import React, { Component } from 'react';
const NavBar = ({ totalCounters }) => {
  return ( <nav className="navbar navbar-light bg-info">
  <a className="navbar-brand text-white" href="#">Navbar <span className="badge badge-pill badge-dark">{ totalCounters }</span></a>
  </nav> );
};

export default NavBar;