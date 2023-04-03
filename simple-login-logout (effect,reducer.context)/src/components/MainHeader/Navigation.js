import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../Context/auth-context";

const Navigation = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {authCtx.isLoggedIn && (
          <React.Fragment>
            <li>
              <a href="/">Users</a>
            </li>
            <li>
              <a href="/">Admin</a>
            </li>
            <li>
              <button onClick={authCtx.logoutFn}>Logout</button>
            </li>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
