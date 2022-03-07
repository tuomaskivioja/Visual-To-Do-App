import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav">
        <div className="navBar" onClick={() => this.props.toggleMenu("navItem")}>View</div>
        <div className="navItem card invisible">Goals</div>
        <div className="navItem card invisible">Tasks</div>
      </div>
    );
  }
}

export default Nav;