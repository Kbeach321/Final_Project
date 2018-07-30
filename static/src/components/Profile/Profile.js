import React, { Component } from 'react';

import './Profile.css';
import default_profile from './../Images/default-profile.jpg'
// User profile instead of default //

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // let image;
    // if(user.profile) {
    //   image = <img className='userprofile' src={user.profile.profile_picture} alt="User Profile"/>
    // } else {
    //   image = <img className='userprofile' src={default_profile} alt="User Profile"/>
    // }

    return (
      <div className="profileheight container-fluid">
        <div className="row">
          <div className="media">
            {/* Display Image of User -- default or uploaded */}
            <img className="profile_picture" src={default_profile} alt="Generic placeholder image"></img>

            {/* Buttons Container */}
            <div className="buttondiv">
              {/* <!-- Button trigger modal (Image Upload)--> */}
              <button type="button" className="upload_btn btn-sm btn-outline-dark" data-toggle="modal" data-target="#exampleModal">
                Upload Image
              </button>
              {/* <!-- Modal --> */}
              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-body">
                      <form>
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">Edit Description:</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                    </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save Changes</button>
                    </div>
                  </div>
                </div>
              </div>


              {/* <!-- Button trigger modal (Descripton)--> */}
              <button type="button" className="btn-sm btn-outline-dark" data-toggle="modal" data-target="#exampleModal">
                Edit Descripton
              </button>
              {/* <!-- Modal --> */}
              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-body">
                      <form>
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">Edit Description:</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                    </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save Changes</button>
                    </div>
                  </div>
                </div>
              </div>
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
