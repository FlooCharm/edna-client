import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from './Routes/Login';

function login() {
  return <h2>Login</h2>;
}

export default function Routes () {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}