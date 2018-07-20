import React, { Component } from 'react';

import './Home.css';
import controllerImage from './../Images/controller.png';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
  <div className="card-body">
    <h1 className="card-title welcome"> Welcome to Console.Log </h1>
    {/* <h5 className="card-title">Your one stop site to log your retro video games!</h5> */}
    <img src={controllerImage} alt="SNES CONTROLLER ILLUSTRATION"/>
    <p className="card-text">the use of this page is to log games from your
    retro video games collection [Dating back to the 90's]!</p>
    <p><b> Currently supporing the following consoles: Game Boy,
    Game Boy Color, Game Boy Advanced, Super Nintendo Entertainment System (SNES), Nintendo 64, Nintendo Gamecube,
    Xbox, Xbox 360, Sega Saturn, Sega Dreamcast, Playstation, and Playstation 2.</b></p>
  <div className="center">
    <a href="/Registration" className="btn btn-primary">Register New Account</a>
    <span> or </span>
    <a href="/Log-in" className="btn btn-success">Sign-in Here</a>
  </div>
  </div>
</div>
);
  }
}
export default Home;
