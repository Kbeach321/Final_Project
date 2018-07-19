import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header.js';
import Footer from './components/Layout/Footer.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default App;
