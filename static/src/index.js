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

ReactDOM.render(
  <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route path='' component={Home}/>
          {/* <Route path='/Games/' component={Games}/> */}
        </Switch>
      </BaseLayout>
  </BrowserRouter>,
 document.getElementById('root'));
registerServiceWorker();
