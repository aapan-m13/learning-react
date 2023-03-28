import React from "react";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <React.Fragment>
            <li>
              <a href="/">Users</a>
            </li>
            <li>
              <a href="/">Admin</a>
            </li>
            <li>
              <button onClick={props.onLogout}>Logout</button>
            </li>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
