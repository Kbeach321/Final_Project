import React, { Component } from 'react';

import './Users.css';

class Users extends Component {
  constructor(props) {
    super(props);
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
