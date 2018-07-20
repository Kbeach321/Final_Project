import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="foot page-footer font-small blue">
        <div className="footer-copyright text-center py-3">© 2018 Copyright  </div>
      </footer>
    );
  }
}
export default Footer;
