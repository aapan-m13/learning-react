import React, { useState } from "react";
import AddUser from "./components/Users/AddUser/AddUser";
import UserList from "./components/Users/UserList/UserList";

function App() {
  const [usersData, setUsersData] = useState([]);

  const handleUsersData = (data) => {
    setUsersData((prevSate) => {
      return [...prevSate, data];
    });
  };
  return (
    <React.Fragment>
      <AddUser addUsers={handleUsersData}></AddUser>
      <UserList usersData={usersData}></UserList>
    </React.Fragment>
  );
}

export default App;
