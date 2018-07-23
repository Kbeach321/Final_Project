import React, { Component } from 'react';

import './Log-in.css';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <container>
        <row className='justify-content-center'>
          <div className="col-10 align-self-center">
            <h1 className='reg_form'> Log-in Form</h1>
        <form>
          <div class="form-group">
            <label for="exampleInputUsername1">Username</label>
            <input type="Username" class="form-control" id="exampleInputUsername1" placeholder="Username"></input>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
          </div>
          <button type="submit" class="btn btn-success">Submit</button>
          <span> New User? </span>
          <a href="/Registration" className="btn btn-primary">Register New Account</a>
        </form>
      </div>
    </row>
      </container>
    );
  }
}

export default Login;
