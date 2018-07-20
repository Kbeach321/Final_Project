import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className=" page-footer font-small footer-color">
        <div className="footer-copyright text-center py-3">© 2018 Copyright  </div>
      </footer>
    );
  }
}
export default Footer;
