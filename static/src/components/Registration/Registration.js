import React, { Component } from 'react';

import './Registration.css';

class Registration extends Component {
  constructor(props) {
    super(props);
      this.state = {
        email: '',
        username: '',
        password: '',
        authenticated: false
      }
      this._inputHandler = this._inputHandler.bind(this);
      this._createAccount = this._createAccount.bind(this);
  }

  _inputHandler(event){
    let obj = {}
    let key = event.target.name;
    obj[key] = event.target.value;
    this.setState(obj)
  }

// Receive Token from the back end
  _createAccount(event) {
    event.preventDefault();
    let self = this;
    let data = this.state;
    let url = `http://localhost:8000/auth/users/create/`;
console.log(this.state)
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json',
    }
  })

  .then(function(response){
    if(!response.ok){
      throw Error(response.statusText);
    }
    return response.json()
  })
  .then(function(responseJSON){
    console.log('response', responseJSON.data)

    let obj = {
      email: '',
      username: '',
      password: '',
    }
    self.setState(obj)
  })
  .catch(function(error){
    console.log('Looks like there was a problem: \n', error);
  });
}

  render() {
    return (
      <div className="registershell container-fluid">
        <row className='justify-content-center'>
          <div className="col align-self-center">
            <h1 className='reg_form'> Registration Form</h1>
            <form onSubmit={this._createAccount}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.email} name='email' onChange={this._inputHandler} required placeholder="Enter email"></input>
                </div>
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Username</label>
                <input type="username" className="form-control" id="exampleInputUsername1" value={this.state.username} name='username' onChange={this._inputHandler} requiredplaceholder="Username"></input>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" value={this.state.password} name='password' onChange={this._inputHandler} requiredplaceholder="Password"></input>
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
