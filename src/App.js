import React, {Component} from 'react';
import {connect} from 'react-redux';

import 'shoelace-css/dist/shoelace.css';
import './App.css';

import Login from "./containers/Login";
import Register from "./containers/Register";
import UserInfo from "./containers/UserInfo";

import {loadTokenFromCookie} from "./actions";

class App extends Component {
    componentWillMount() {
        const loadToken = this.props.loadToken;        
        loadToken();
    }
    render() {
        return (
            <div className="App">
                <UserInfo/>
                <div className="grid-50-50">
                    <Login/>
                    <Register/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadToken: () => dispatch(loadTokenFromCookie())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
