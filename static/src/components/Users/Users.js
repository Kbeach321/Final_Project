import React, { Component } from 'react';

import './Users.css';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users : []
    }
  }

  componentDidMount() {
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
    return (
    <div className="container-fluid">
      <div className='row searchbar'>
        <div className="col-12">
          <form className="form-inline ">
            <span className="current_users"> Find Users </span>
            <div className="searchbar_right">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success my-2  submit_search" type="submit">Search</button>
            </div>
          </form>
        </div>
      </div>
      <div className='row display_users'>
        <div className="col">
          Users
        </div>
      </div>
    </div>
    );
  }
}

export default Users;
