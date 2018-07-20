import React, { Component } from 'react';
import './BaseLayout.css';
import Header from './Header.js'
import Footer from './Footer.js'

class BaseLayout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        { this.props.children }
        <Footer />
      </div>


    );
  }
}
export default BaseLayout;
