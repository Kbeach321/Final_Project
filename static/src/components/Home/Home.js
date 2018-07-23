import React, {Component} from 'react';

import './Home.css';
import controllerImage from './../Images/controller.png';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="background-image">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title welcome center">
              Welcome to Console.Log
            </h1>
            {/* <h5 className="card-title">Your one stop site to log your retro video games!</h5> */}
            <div className="center-image">
              <div className="image_div">
                <img src={controllerImage} alt="SNES CONTROLLER ILLUSTRATION"/>
              </div>
              <div className="image_div2">
                <img src={controllerImage} alt="SNES CONTROLLER ILLUSTRATION"/>
              </div>
            </div>
            <p className="card-text descript-text">Console.Log was created as a platform to log your retro video game collection!</p>
            <p className="card-text support-text">
              Currently supporing the following consoles: Game Boy, Game Boy Color, Game Boy Advanced, Super Nintendo Entertainment System (SNES), Nintendo 64, Nintendo Gamecube, Xbox, Xbox 360, Sega Saturn, Sega Dreamcast, Playstation, and Playstation 2.</p>
            <div className="center">
              <a href="/Registration" className="btn btn-primary">Register New Account</a>
              <a href="/Login" className="btn btn-success">Log-in Here</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
