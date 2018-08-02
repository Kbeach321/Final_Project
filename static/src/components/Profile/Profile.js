import React, { Component } from 'react';
import './Profile.css';
import defaultCover from './../Images/no_image.gif';
let API_URL = process.env.REACT_APP_API_URL

//Profile Component
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user : {
        username: '',
        description: '',
        profile_image: ''
      },
      collection : []
    }
    this._inputHandler = this._inputHandler.bind(this);
    this._updateDescription = this._updateDescription.bind(this);
    this._uploadProfile = this._uploadProfile.bind(this);
    this._fileInputHandler = this._fileInputHandler.bind(this);
    this._loadProfile = this._loadProfile.bind(this);

    if(!localStorage.getItem('auth_token')) {
      this.props.history.push('/login')
    }
  }

// Original render of the page -- Based on user
componentDidMount() {
  this._loadProfile();
  this._loadCollection();
}

// Load Collection Fetch Call
  _loadCollection(){
    let token = localStorage.getItem('auth_token');
    fetch(`${API_URL}/games/`, {
      method: 'GET',
      body: JSON.stringify(),
      headers:{
        'Content-Type': 'application/json',
        'Authorization' : token
      }
    })
    //return your response --> Json
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText)
        }
        return res.json()
      })
      .then(resJSON => {
        this.setState({collection: resJSON});
      })
      .catch(error => console.error('Error:', error));
  }

// Loads Profile Information
  _loadProfile() {
    let self = this;
    let token = localStorage.getItem('auth_token');
    fetch(`${API_URL}/profile/`,{
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
        this.setState({user: resJSON});
        }
      )
      .catch(error => console.error('Error:', error));
  }

// Triggers setting state of description
  _inputHandler(event){
    if(event.target.name === 'description') {
      let user = this.state.user;
      user.description = event.target.value;
      this.setState({user: user})
    }
  }

// Update Description Fetch Call
  _updateDescription(event) {
    event.preventDefault();
    let data = {
      description : this.state.user.description
    }
    let url = `${API_URL}/profile/`;
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
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText)
        }
      })
      .catch(error => console.error('Error:', error));
     }

// Triggers setting state of profile picture
  _fileInputHandler(event){
    let fileUpload = event.target.files[0]
     this.setState({picture:fileUpload})
  }

// Upload Profile Image Fetch Call
  _uploadProfile(event) {
    event.preventDefault();
    let url = `${API_URL}/profile/`;
    let self = this;
    let token = localStorage.getItem('auth_token');
    let formData = new FormData()
    formData.append('profile_picture', this.state.picture)

    fetch(url, {
      method: 'PATCH',
      body: formData,
      headers:{
        'Authorization' : token
      }
    })
    .then(res => res.json())
    .then(resJSON => {
      this.setState({user: resJSON});
      }
    )
    .catch(error => console.error('Error:', error));
  }

// Deletes a Game from your record
  _removeGame(game){
    let token = localStorage.getItem('auth_token');
    let id = game.igdb_id
    fetch(`${API_URL}/games/${id}`, {
      method: 'DELETE',
      body: JSON.stringify(),
      headers:{
        'Content-Type': 'application/json',
        'Authorization' : token
      }
    })
    //return your response --> Json
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText)
        }
        return
      })
      .then(()=>{
        let collection = this.state.collection
        let gameIndex = collection.indexOf(game)
        collection.splice(gameIndex, 1)
        console.log('index', gameIndex, collection)
        this.setState({collection: collection});
      })
      .catch(error => console.error('Error:', error));
  }

// Shoots off the render
  render() {
    let collection = this.state.collection.map((game)=>{
      console.log(game)
      return(
        <div className='mygameshell' key={game.igdb_id}>
          <a className='mygameselector' href="#">
          <img className='mygamecover' src={game.cover ? game.cover : defaultCover} alt="Game Cover"/>
          <div className='mygamename'>{game.name}</div> </a>
          <button type="button" className="mycollectionbutton btn-sm btn-outline-dark" onClick={(event)=>{event.preventDefault(); this._removeGame(game)}}> Remove Game </button>
        </div>
      )
    })

    return (
      <div className="profileheight container-fluid">
        <div className="row">
          <div className="media">
            {/* Display Image of User -- default or uploaded */}
            <img className="profile_picture" src={this.state.user.profile_picture} alt="Profile Image"/>
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
                      <form onSubmit={this._uploadProfile}>
                        <div className="form-group" >
                          <input className='photoupload' type="file" name="pic" accept="" onChange={this._fileInputHandler}/>
                          <input type="submit"/>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Button trigger modal (Descripton)--> */}
              <button type="button" className=" editdescription btn-sm btn-outline-dark" data-toggle="modal" data-target="#descriptionModal">
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
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="description" value={this.state.user.description} onChange={this._inputHandler}>
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
                <p>  About Me: <br/> {this.state.user.description} </p>
            </div>
          </div>
        <div className="games_log row">
          <div className="col-12 align-self-center">
            <p className="games_owned"> Collection: </p>
            <a href="/games"> <button className= 'myaddgamesbutton btn-sm btn-outline-dark'> Add Games </button> </a>
            <div className="collection">{collection}</div>

          </div>
          </div>
        </div>
    );
  }
}

export default Profile;
