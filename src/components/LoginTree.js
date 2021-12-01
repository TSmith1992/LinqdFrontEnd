import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./UserLoginFiles/Login";
import Signup from "./UserLoginFiles/Signup";

export default function LoginTree(setCurrentUser, currentUser) {
  return (
    <Switch>
      <Route exact path="/">
        <Login setCurrentUser={setCurrentUser} />
      </Route>
      <Route exact path="/signup">
        <Signup setCurrentUser={setCurrentUser} />
      </Route>
    </Switch>
  );
}
