import React, { Component } from 'react';

import './Users.css';

class Users extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="container">
      <div className='row searchbar'>
        <div className="col-12">
          <form className="form-inline ">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success my-2 my-sm-0 submit_search" type="submit">Search</button>
          </form>
        </div>
      </div>
      <div>
        DISPLAY_USERS
      </div>
    </div>
    );
  }
}

export default Users;
