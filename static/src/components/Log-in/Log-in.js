import React, { Component } from 'react';

import './Log-in.css';

class Login extends Component {
  constructor(props) {
    super(props);
  }
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
   // also make sure you get a 200 back
   .then(res => res.json())
   .then(resJSON => console.log('Success:', resJSON.auth_token))
   .catch(error => console.error('Error:', error));

   // you have to set your token in localStorage
 }

  render() {
    return (
      <div className="container-fluid">
        <row className='justify-content-center'>
          <div className="col-12 align-self-center">
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
