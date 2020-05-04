import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import history from "./history";
import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";

const RouterContainer: React.FC = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </ConnectedRouter>
  );
};

export default RouterContainer;
