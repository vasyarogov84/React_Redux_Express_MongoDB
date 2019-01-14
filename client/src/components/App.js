import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { checkIfUserLogin } from "../actions";
import { connect } from "react-redux";
import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
class App extends Component {
  componentDidMount() {
    this.props.checkIfUserLogin();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="ui container">
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            {/*
            <Route path="/surveys/new" component={SurveyNew} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  { checkIfUserLogin }
)(App);
