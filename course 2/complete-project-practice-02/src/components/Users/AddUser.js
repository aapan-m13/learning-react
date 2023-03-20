import React from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import styles from "./AddUser.module.css";

export default function AddUser() {
  const addUserSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={styles["input"]}>
      <form onSubmit={addUserSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age</label>
        <input id="age" type="number"></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}
