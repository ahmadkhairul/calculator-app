import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { authUser } from "./_actions/user";

import Calculator from "./pages/Index";
import Login from "./pages/auth/Login";

import "./App.css";

const App = ({ authUser }) => {
  useEffect(() => {
    authUser();
  }, []);

  let routes = (
    <Switch>
      <Route path="/calculator" component={Calculator} />
      <Route path="/" component={Login} />
    </Switch>
  );

  return <Router>{routes}</Router>;
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authUser: () => dispatch(authUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
