import React, { Component } from 'react';
import './Log-in.css';

// Login Component //
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      authenticated: false
    }
// Binds tools to this
    this._inputHandler = this._inputHandler.bind(this);
    this._login = this._login.bind(this);
  }

// Set the Username and Password to return Token
  _inputHandler(event){
    let obj = {}
    let key = event.target.name;
    obj[key] = event.target.value;
    this.setState(obj)
  }

// Receive Token from the back end
  _login(event) {
    event.preventDefault();
    let data = this.state;
    let url = `http://localhost:8000/auth/token/create/`;
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json',
      }
    })

//return your response --> Json
  .then(res => res.json())
//Set the auth token & authenticate log-in
  .then(resJSON => {
    localStorage.setItem('auth_token', 'token ' + resJSON.auth_token);
    this.setState({authenticated: true});
// Push to Profile Page -- When Login confirmed
    this.props.history.push('/profile')
    }
  )
  .catch(error => console.error('Error:', error));
 }

// CLI //
  render() {
    return (
      <div className="loginshell container-fluid">
        <row className='justify-content-center'>
          <div className="col-12 align-self-center">
            <h1 className='reg_form'> Log-in Form</h1>
        <form onSubmit={this._login}>
          <div className="form-group">
            <label htmlFor="exampleInputUsername1">Username</label>
            <input type="Username" className="form-control" placeholder="Username" value={this.state.username} name='username' onChange={this._inputHandler} required/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" placeholder="Password" value={this.state.password} name='password' onChange={this._inputHandler} required/>
          </div>
          <div className="buttonshell">
            <button type="submit" className="btn btn-success">Submit</button>
            <span className="newuser"> New User? </span>
            <a href="/Registration" className="btn btn-primary">Register Account</a>
          </div>
        </form>
      </div>
    </row>
      </div>
    );
  }
}

export default Login;
