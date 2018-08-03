import React, { Component } from 'react';
import './Users.css';
import default_profile from './../Images/default-profile.jpg'
import defaultCover from './../Images/no_image.gif';
let API_URL = process.env.REACT_APP_API_URL

function GameTile(props){
  let game = props.game
  return (
    <div className='mygameshell' key={game.igdb_id}>
      <a className='mygameselector' href="#">
      <img className='mygamecover' src={game.cover ? game.cover : defaultCover} alt="Game Cover"/>
      <div className='mygamename'>{game.name}</div> </a>
    </div>
  )
}

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message : ''
    }
    this._inputHandler=this._inputHandler.bind(this);
    this._sendEmail=this._sendEmail.bind(this);
  }
    _inputHandler(event){
      let obj = {}
      let key = event.target.name;
      obj[key] = event.target.value;
      this.setState(obj)
    }

    _sendEmail(props){
      let user = this.props.user
      let token = localStorage.getItem('auth_token');
      let message = {message: this.state.message}
      fetch(`${API_URL}/api/users/${user.id}/email/`, {
        method: 'POST',
        body: JSON.stringify(message),
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
        .then(()=> {
          this.setState({message:""});
        })
        .catch(error => console.error('Error:', error));
    }


  render() {
    console.log('user', this.props.user)
    return (
      <div>
      <div class="modal fade profile-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div className="modaltext modal-content">
            <div className="topusershell">
            <div className="userimage">
            <img className='userprofile' src={this.props.user.profile_picture} alt="User Profile"/>
            <div className='username'>{this.props.user.username}</div>
            </div>
            <div className="messagebox">
              <textarea className="message" name="message" onChange={this._inputHandler} value={this.state.message}></textarea>
              <button className="sendmessage" onClick={this._sendEmail}> Send Message </button>
            </div>
            </div>
            <div className="usersgames">{this.props.user.games.map(function(game){
              return <GameTile game={game}/>
            })}</div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}


class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users : [],
      selectedUser: {
        games : []
      },
    }
    this._selectUser = this._selectUser.bind(this);
  }

  componentDidMount(props) {
   let self = this;

   fetch(`${API_URL}/api/users/`)
   .then(function(response){
     if(!response.ok){
       throw Error(response.statusText);
     }
     console.log(response)
     console.log('response users', response)
     return response.json()
   })
   .then(function(responseJSON){
     console.log('response', responseJSON)
     self.setState({users: responseJSON});
   })
   .catch(function(error){
     console.log('Looks like there was a problem: \n', error);
   });
  }

  _selectUser(user){
    let token = localStorage.getItem('auth_token');
    user.games = []
    this.setState({selectedUser : user})
    fetch(`${API_URL}/api/users/${user.id}/games/`, {
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
        user.games = resJSON;
        this.setState({selectedUser: user});
      })
      .catch(error => console.error('Error:', error));
  }

//  Another call to retrun games


  render() {
    let self = this;
    let users = this.state.users.map(function(user){
      console.log('user here', user)
      return(
        <div className="singleUser" key={user.id}>
          <div className='usershell' onClick={()=>self._selectUser(user)} data-toggle="modal" data-target={`.profile-modal-lg`} >
            <img className='userprofile' src={user.profile_picture} alt="User Profile"/>
            <div className='username'>{user.username}</div>
          </div>
        </div>
      )
    })
    return (
    <div className="viewrender container-fluid">
      <div className='row usersearchbar'>
        <div className="col-12">
          <form className="form-inline ">
            <span className="current_users"> Users List </span>
          </form>
        </div>
      </div>
      <div className='row display_users'>
        <div className="col usercontainer">
          {users}
        </div>
      </div>

        <User user={this.state.selectedUser} className="userbox"/>

    </div>
    );
  }
}

export default Users;
