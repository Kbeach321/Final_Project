import React, { Component } from 'react';

import './Registration.css';

class Registration extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <row className='justify-content-center'>
          <div className="col align-self-center">
            <h1 className='reg_form'> Registration Form</h1>
            <form>
                <div className="form-row">
                  <div className="col">
                    <label htmlFor="exampleInputFirstName1">First Name</label>
                    <input type="text" className="form-control" placeholder="First name"></input>
                  </div>
                  <div className="col">
                    <label htmlFor="exampleInputLastName1">Last Name</label>
                    <input type="text" className="form-control" placeholder="Last name"></input>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                </div>
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Username</label>
                <input type="username" className="form-control" id="exampleInputUsername1" placeholder="Username"></input>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
              </div>
              <div className="buttonshell">
                <button type="submit" className="btn btn-primary">Submit</button>
                <span className='newuser'> Already a user? </span>
                <a href="/Login" className="btn btn-success">Log-in Here</a>
              </div>
            </form>
          </div>
        </row>
      </div>
    );
  }
}
export default Registration;
