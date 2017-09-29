import React, { Component } from "react";
import { connect } from "react-redux";

//import from "./styles/App.css";

import Login from "../containers/Login.js";
import Register from "../containers/Register.js";
import UserInfo from "../containers/UserInfo.js";

import { loadTokenFromCookie } from "../actions";

class App extends Component {
  componentWillMount() {
    const loadToken = this.props.loadToken;
    loadToken();
  }
  render() {
    return (
      <div className="App">
        <div className="grid-50-50">
          <h1>HEYo TEll me Your Secrets</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    loadToken: () => dispatch(loadTokenFromCookie())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
