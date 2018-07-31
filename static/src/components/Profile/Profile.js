import React, { Component } from 'react';
import './Profile.css';
// User profile instead of default //

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user : {
        username: '',
        profile: {
          description: ''
        }
      },
      collection : []
    }
    this._inputHandler = this._inputHandler.bind(this);
    this._updateDescription = this._updateDescription.bind(this);
    this._uploadProfile = this._uploadProfile.bind(this);
  }

  _inputHandler(event){

    if(event.target.name === 'description') {
      let user = this.state.user;
      user.profile.description = event.target.value;
      this.setState({user: user})
    }

    // let obj = {}
    // let key = event.target.name;
    // obj[key] = event.target.value;
    // this.setState(obj)
  }

  componentDidMount() {
    let self = this;
    let token = localStorage.getItem('auth_token');
    fetch(`http://localhost:8000/profile/`,{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
        'Authorization' : token
      }
    })
    //return your response --> Json
      .then(res => res.json())
    //test the response
      .then(resJSON => {
        console.log('comp did mount', resJSON)
        let user = resJSON;
        if(!user.profile) {
          user.profile = {}
        }
        this.setState({user: resJSON});
        }
      )
      .catch(error => console.error('Error:', error));
  }

  _updateDescription(event) {
    event.preventDefault();
    let data = {
      description : this.state.user.profile.description
    }

    let url = `http://localhost:8000/profile/`;
    // let self = this;
    let token = localStorage.getItem('auth_token');

    fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json',
        'Authorization' : token
      }
    })
    //return your response --> Json
      .then(res => res.json())
    //test the response
      .then(resJSON => {
        console.log(resJSON)
        // this.setState({descripton : this.state.user.profile.descripton})
      }
      )
      .catch(error => console.error('Error:', error));
     }


  _uploadProfile(event) {
    event.preventDefault();
    let data = {
      profile_image : this.state.user.profile.profile_picture,
    }
    let url = `http://localhost:8000/profile/`;
    let self = this;
    let token = localStorage.getItem('auth_token');
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json',
        'Authorization' : token
      }
    })
  }

  render() {
    console.log('true state', this.state)

    return (
      <div className="profileheight container-fluid">
        <div className="row">
          <div className="media">
            {/* Display Image of User -- default or uploaded */}
            {/* Set src to {image} */}


            {this.state.user.profile ? <img className="profile_picture" src={this.state.user.profile.profile_picture} alt="Profile Image"/> : null}
            {/* <img className="profile_picture" src={this.state.user.profile.profile_picture} alt="Profile Image"/> */}



            {/* Buttons Container */}
            <div className="buttondiv">
              {/* <!-- Button trigger modal (Image Upload)--> */}
              <button type="button" className="upload_btn btn-sm btn-outline-dark" data-toggle="modal" data-target="#imageModal">
                Upload Image
              </button>
              {/* <!-- Modal --> */}
              <div className="modal fade" id="imageModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-body">
                      <form>
                        <div className="form-group" onSubmit={this._uploadProfile}>
                          <input type="file" name="pic" accept=""/>
                          <input type="submit"/>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Button trigger modal (Descripton)--> */}
              <button type="button" className="btn-sm btn-outline-dark" data-toggle="modal" data-target="#descriptionModal">
                Edit Descripton
              </button>
              {/* <!-- Modal --> */}
              <div className="modal fade" id="descriptionModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <form onSubmit={this._updateDescription}>
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Edit Description:</label>





                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="description" value={this.state.user.profile.description} onChange={this._inputHandler}>
                        </textarea>





                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="submit" className="btn btn-primary">Save Changes </button>
                    </div>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
            <div className="col-12 align-self-center bio-info media-body">
              <h5> {this.state.user.username}'s Bio</h5>




              {this.state.user.profile ? <p>  About Me: <br/> {this.state.user.profile.description} </p> : null}
              {/* <p>  About Me: <br/> {this.state.user.profile.description} </p> */}





            </div>
          </div>
        <div className="games_log row">
          <div className="col-12 align-self-center">
            <p className="games_owned"> Collection: </p>
            <a href="/games"> <p> Add Games + </p> </a>
          </div>
          </div>
        </div>
    );
  }
}

export default Profile;
