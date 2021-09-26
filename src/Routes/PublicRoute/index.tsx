import React from "react";
import { Route } from "react-router-dom";

import { PublicLayout } from "Components/Layouts";

const PublicRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <PublicLayout>
          <Component {...props} />
        </PublicLayout>
      )}
    />
  );
};

export default PublicRoute;
