import React, {Component} from 'react';
import 'shoelace-css/dist/shoelace.css';
import './App.css';

import Login from "./containers/Login";
import Register from "./containers/Register";
import UserInfo from "./containers/UserInfo";

class App extends Component {
    render() {
        return (
            <div className="App">
              <UserInfo />
                <div className="grid-50-50">
                    <Login/>
                    <Register/>
                </div>
            </div>
        );
    }
}

export default App;
