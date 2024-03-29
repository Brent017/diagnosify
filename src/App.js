import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";

const my404 = () => {
  return <div>Page does not exist :-o</div>;
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      username: "Brent",
      password: "",
      email: "",
      loading: false,
      isAuth: false
    };
  }

  render() {
    return (
      <main>
        {this.state.isAuth}
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Login {...props} logIn={this.logIn} />}
          />
          <Route
            exact
            path="/register"
            render={props => <Register {...props} register={this.register} />}
          />
          <Route
            exact
            path="/profile"
            render={props => <Profile {...props} userInfo={this.state} />}
          />
        </Switch>
      </main>
    );
  }
}

export default App;
