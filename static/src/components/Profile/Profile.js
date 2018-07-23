import React, { Component } from 'react';

import './Profile.css';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3 profile_picture">
            Profile_Picture_PlaceHolder
          </div>
          <div className="col-3 bio">
            Bio_PlaceHolder
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center">
            <span> Games Owned </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
