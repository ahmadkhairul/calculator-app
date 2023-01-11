import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { authUser } from "./_actions/user";

import Index from "./pages/Index";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Donate from "./pages/donate/Donate";
import Transfer from "./pages/donate/Transfer";
import Article from "./pages/article/Article";
import ArticleDetail from "./pages/article/ArticleDetail";
import Setting from "./pages/setting/Setting";
import DonateHistory from "./pages/setting/DonateHistory";

import "./App.css";

const App = ({ authUser }) => {
  useEffect(() => {
    authUser();
  }, []);

  let routes = (
    <Switch>
      <Route path="/articles" component={Article} />
      <Route path="/article/:id" component={ArticleDetail} />
      <Route path="/donate" exact component={Donate} />
      <Route path="/transfer" component={Transfer} />
      <Route path="/setting" component={Setting} />
      <Route path="/history" component={DonateHistory} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/" component={Index} />
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
