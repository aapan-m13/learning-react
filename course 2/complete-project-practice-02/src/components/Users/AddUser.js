import React from "react";
import Card from "../UI/Card/Card";

export default function AddUser() {
  const addUserSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card>
      <form onSubmit={addUserSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age</label>
        <input id="age" type="number"></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
}
