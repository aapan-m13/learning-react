import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import styles from "./AddUser.module.css";

export default function AddUser(props) {
  const [userNameInput, setUserNameInput] = useState("");
  const [userAgeInput, setUserAgeInput] = useState("");

  const addUserSubmitHandler = (event) => {
    event.preventDefault();
    if (userNameInput.trim().length < 2) return;
    if (+userAgeInput < 1) return;
    console.log(userNameInput, userAgeInput);
    const data = {
      key: (Math.random() + 1).toString(36).substring(7),
      name: userNameInput,
      age: userAgeInput,
    };
    props.addUsers(data);
    setUserNameInput("");
    setUserAgeInput("");
  };

  const usrnameChangeHandler = (event) => {
    setUserNameInput(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setUserAgeInput(event.target.value);
  };
  return (
    <Card className={styles["input"]}>
      <form onSubmit={addUserSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={userNameInput}
          onChange={usrnameChangeHandler}
        ></input>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          value={userAgeInput}
          onChange={ageChangeHandler}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}
