import React, { Component } from "react";
import "./Footer.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          <ToastContainer />
        </div>
        <p className="footer-text">Developed By: Mayank Agarwal</p>
      </div>
    );
  }
}

export default Footer;
