import React, { Component } from 'react';

import './Users.css';

class Users extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="container">

      <div className='searchbar'>
        Search Bar
      </div>
      <div>
        Content
      </div>
    </div>
    );
  }
}

export default Users;
