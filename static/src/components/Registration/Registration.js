import React, { Component } from 'react';

import './Registration.css';

class Registration extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <container>
        <row className='justify-content-center'>
          <div className="col-10 align-self-center">
            <h1 className='reg_form'> Registration Form</h1>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
              </div>
              <form>
                <div class="form-row">
                  <div class="col">
                    <label for="exampleInputFirstName1">First Name</label>
                    <input type="text" class="form-control" placeholder="First name"></input>
                  </div>
                  <div class="col">
                    <label for="exampleInputLastName1">Last Name</label>
                    <input type="text" class="form-control" placeholder="Last name"></input>
                  </div>
                </div>
              </form>
              <div class="form-group">
                <label for="exampleInputUsername1">Username</label>
                <input type="username" class="form-control" id="exampleInputUsername1" placeholder="Username"></input>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
              <span> Already a user? </span>
              <a href="/Login" className="btn btn-success">Log-in Here</a>
            </form>
          </div>
        </row>
      </container>
    );
  }
}
export default Registration;
