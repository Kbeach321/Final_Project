import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let authenticated = localStorage.getItem('auth_token');
    return (
      <nav className="navbar navbar-expand-sm navbar-light nav-color">
        <NavLink className="navbar-brand" to="/">Console.Log</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/games">Games</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/users">Users</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">Profile</NavLink>
            </li>
          </ul>
          <ul className= "nav navbar-nav login_ul">
            <li className="nav-item login_li">
              {
                authenticated ? <NavLink to="/" className="nav-link">Log-out</NavLink> : <NavLink to="/login" className="nav-link">Log-in</NavLink>
              }
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Header;
