import React from "react";
import { Route } from "react-router-dom";

import ConnectedSwitch from "./ConnectedSwitch";
import Login from "../client/containers/login";
import Dashboard from "../client/containers/dashboard";
/* style */
import "../../public/style/main.scss";

function Routes() {
  return (
    <main role="application">
      <ConnectedSwitch>
        {/* Login */}
        <Route path="/" exact component={Login} />
        {/* Dashboard */}
        <Route path="/dashboard" component={Dashboard} />
        {/* Error 404 */}
        <Route component={Login} />
      </ConnectedSwitch>
    </main>
  );
}

export default Routes;
