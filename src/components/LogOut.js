import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class LogOut extends Component {
  constructor(props) {
    super(props);
    this.logOutHandler = this.logOutHandler.bind(this);
  }

  logOutHandler(e) {
    e.preventDefault();
    console.log("oioioioi");
  }

  render() {
    return (
      <div className="BaseLayout">
        <div>
          <h1>HELO</h1>
          <div>
            <button type="submit" onClick={this.logOutHandler}>
              Dirty Secrets
            </button>
          </div>
        </div>
        {this.props.childeren}
      </div>
    );
  }
}
