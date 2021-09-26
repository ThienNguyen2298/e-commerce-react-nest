import React from "react";
import { Route, Redirect } from "react-router-dom";

import { ROUTES } from "Constants/Route";
import { PrivateLayout } from "Components/Layouts";

const PrivateRoute = ({
  component: Component,
  useDefaultLayout = true,
  ...props
}: any) => {
  const isAuthenticated = false;

  return (
    <Route
      {...props}
      render={({ location }) => {
        return isAuthenticated ? (
          useDefaultLayout ? (
            <PrivateLayout>
              <Component />
            </PrivateLayout>
          ) : (
            <Component />
          )
        ) : (
          <Redirect
            to={{
              pathname: ROUTES.LOGIN,
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
