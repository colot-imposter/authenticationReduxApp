import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./reducer";
import BaseLayout from "./components/BaseLayOut.js";
import UserInfo from "./containers/UserInfo.js";
import LogOut from "./components/LogOut.js";
import Register from "./containers/Register.js";
import Login from "./containers/Login.js";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <div>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/home" component={UserInfo} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            {/* <Route path="/login" component={login} />
            <Route path="/logout" component={LogOut} /> */}
          </Switch>
        </div>
      </BaseLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
