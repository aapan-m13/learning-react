import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const val = localStorage.getItem("loginValue");
    if (val === 1) {
      setIsLoggedIn(1);
      console.log("here");
    } else {
      setIsLoggedIn(0);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("loginValue", 1);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem("loginValue", 0);
    console.log(localStorage.getItem("loginValue"));
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
