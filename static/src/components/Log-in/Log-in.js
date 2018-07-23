import React, { Component } from 'react';

import './Log-in.css';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <row className='justify-content-center'>
          <div className="col-10 align-self-center">
            <h1 className='reg_form'> Log-in Form</h1>
        <form>
          <div className="form-group">
            <label for="exampleInputUsername1">Username</label>
            <input type="Username" className="form-control" id="exampleInputUsername1" placeholder="Username"></input>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
          <span> New User? </span>
          <a href="/Registration" className="btn btn-primary">Register Account</a>
        </form>
      </div>
    </row>
      </div>
    );
  }
}

export default Login;
