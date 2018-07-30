import React, { Component } from 'react';
import './Users.css';
import default_profile from './../Images/default-profile.jpg'

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users : []
    }
  }

  componentDidMount(props) {
   let self = this;

   fetch(`http://localhost:8000/users/`)
   .then(function(response){
     if(!response.ok){
       throw Error(response.statusText);
     }
     console.log(response)
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

  render() {
    let users = this.state.users.map(function(user){
    let image;
    if(user.profile) {
      image = <img className='userprofile' src={user.profile.profile_picture} alt="User Profile"/>
    } else {
      image = <img className='userprofile' src={default_profile} alt="User Profile"/>
    }
      return(
        <div className='usershell' key={user.username}>
          <a className='profileselector' href="#">
          {image}
          <div className='username'>{user.username}</div>
          </a>
        </div>
      )
    })
    return (
    <div className="viewrender container-fluid">
      <div className='row searchbar'>
        <div className="col-12">
          <form className="form-inline ">
            <span className="current_users"> Find Users </span>
            {/* <div className="searchbar_right">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success my-2  submit_search" type="submit">Search</button>
            </div> */}
          </form>
        </div>
      </div>
      <div className='row display_users'>
        <div className="col">
          {users}
        </div>
      </div>
    </div>
    );
  }
}

export default Users;
