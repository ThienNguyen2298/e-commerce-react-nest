import React from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";

import PublicRoute from "./PublicRoute";
import { ROUTES } from "Constants/Route";
import { HomePage } from "Pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from={"/"} to={ROUTES.HOME} />
        {/* Public routes */}
        <PublicRoute exact path={ROUTES.HOME} component={HomePage} />
        {/* Private routes */}
      </Switch>
    </Router>
  );
};

export default Routes;
