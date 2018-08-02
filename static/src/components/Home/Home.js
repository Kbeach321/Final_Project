import React, {Component} from 'react';
import Octicon, {Person, Plus, Book} from '@githubprimer/octicons-react'
import {NavLink} from "react-router-dom";
import './Home.css';
import controllerImage from './../Images/controller.png';
let API_URL = process.env.REACT_APP_API_URL

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className= "container-fluid background-image">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title welcome center">
              Welcome to Console.Log
            </h1>
            <div className="center-image">
              <div className="image_div">
                <img src={controllerImage} alt="SNES CONTROLLER ILLUSTRATION"/>
              </div>
              <div className="image_div2">
                <img src={controllerImage} alt="SNES CONTROLLER ILLUSTRATION"/>
              </div>
            </div>
            <h5 className="card-text descript-text">Console.Log was created as a platform to log your retro video game collection!</h5>
            <p className="card-text support-text">
              Currently supporing the following consoles: Game Boy, Game Boy Color, Game Boy Advanced, Super Nintendo Entertainment System (SNES), Nintendo 64, Nintendo Gamecube, Xbox, Xbox 360, Sega Saturn, Sega Dreamcast, Playstation, and Playstation 2.</p>
            <div className="center">
              {/* <a href="registration/" className="btn btn-primary register">Register New Account</a> */}
              <NavLink className="btn btn-primary register" to="/registration/">Register New Account</NavLink>
              {/* <a href="login/" className="btn btn-success login">Log-in Here</a> */}
              <NavLink className="btn btn-success login" to="/login/">Log-in</NavLink>
            </div>
            <div className="row">
              <div className="col-12 startcollection collectionheader"> Log your games in 3 simple steps!</div>
              <div className="col-sm-4">
                <div className="card">
                  <div className="card-body startcollection">
                    <h5 className="card-title">Register an account</h5>
                    <p className="card-text">Already registered? Sign-in!</p>
                    <Octicon icon={Person} size="large"/>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card">
                  <div className="card-body startcollection">
                    <h5 className="card-title">Update your profile!</h5>
                    <p className="card-text">Add as little or as much about yourself as you would like to your bio!</p>
                    <Octicon icon={Book} size="large"/>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card startcollection">
                  <div className="card-body">
                    <h5 className="card-title">Add games to your collection!</h5>
                    <p className="card-text">After you have created a profile, you are free to log your games!</p>
                    <Octicon icon={Plus} size="large"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
