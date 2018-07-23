import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import BaseLayout from './components/Layout/BaseLayout.js';
import Home from './components/Home/Home.js'
import Games from './components/Games/Games.js'
import Users from './components/Users/Users.js'
import Profile from './components/Profile/Profile.js'
import Registration from './components/Registration/Registration.js'
import Login from './components/Log-in/Log-in.js'

ReactDOM.render(
  <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route path='/games' component={Games}/>
          <Route path='/users' component={Users}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/registration' component={Registration}/>
          <Route path='/login' component={Login}/>
          <Route exact path='/' component={Home}/>
        </Switch>
      </BaseLayout>
  </BrowserRouter>,
 document.getElementById('root'));
registerServiceWorker();
