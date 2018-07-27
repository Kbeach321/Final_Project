import React, { Component } from 'react';

import './Profile.css';
import default_profile from './../Images/default-profile.jpg'
// User profile instead of default //

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profileheight container-fluid">
        <div className="row">
          <div className="media">
            <img className="profile_picture" src={default_profile} alt="Generic placeholder image"></img>
            <div className="buttondiv">
              <button type="button" className="upload_btn btn-sm btn-outline-dark">Upload Image</button>
              <button type="button" className="bio_btn btn-sm btn-outline-dark">Edit Descripton</button>
            </div>
          </div>
            <div className="col-12 align-self-center bio-info media-body">
              <h5> [Username]'s Bio</h5>
              <p> Descripton: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi numquam nulla reprehenderit temporibus rerum vel voluptatem consequatur id quaerat voluptates nam sequi consequuntur aliquam iste facilis at nostrum, magnam minima.
              </p>
            </div>
          </div>
        <div className="games_log row">
          <div className="col-12 align-self-center">
            <p className="games_owned"> Collection: </p>
          </div>
          </div>
        </div>
    );
  }
}

export default Profile;
