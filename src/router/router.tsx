import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "./history";
import Home from "@/pages/Home/Home";

const RouterContainer: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default RouterContainer;
