import React, { Component } from "react";
import "./App.css";
import "./Header.css";

class Header extends Component {
  

  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-light navbar-fixed-top">
          <span className="navbar-brand mb-0 h1">SpaceX Launch Programs</span>
        </nav>
      </div>
    );
  }
}

export default Header;