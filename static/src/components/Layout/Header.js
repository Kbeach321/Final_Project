import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let authenticated = localStorage.getItem('auth_token');
    return (
      <nav className="navbar navbar-expand-sm navbar-light nav-color">
        <a className="navbar-brand" href="/">Console.Log</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/games">Games</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/users">Users</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile">Profile</a>
            </li>
          </ul>
          <ul className= "nav navbar-nav login_ul">
            <li className="nav-item login_li">
              {
                authenticated ? <a href="/" className="nav-link">Log-out</a> : <a href="/login" className="nav-link">Log-in</a>
              }
              {/* <a href="/login" className="nav-link">Log-in</a> */}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Header;
