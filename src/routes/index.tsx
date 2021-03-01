import React from "react";
import { Switch, Route } from "react-router-dom";
import Seach from "../pages/Search";
import Detail from "../pages/Detail";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Seach} />
      <Route path="/detail" component={Detail} />
    </Switch>
  );
};

export default Routes;
