import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/Error/ErrorModal";
import styles from "./AddUser.module.css";

export default function AddUser(props) {
  const [userNameInput, setUserNameInput] = useState("");
  const [userAgeInput, setUserAgeInput] = useState("");
  const [errorState, setErrorState] = useState(false);

  const addUserSubmitHandler = (event) => {
    event.preventDefault();
    if (userNameInput.trim().length < 2) {
      setErrorState(true);
      return;
    }

    if (+userAgeInput < 1) {
      setErrorState(true);
      return;
    }
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

  const errorStateHandler = () => {
    setErrorState(false);
  };
  return (
    <div>
      {errorState && (
        <ErrorModal
          title="Error"
          message="please check network"
          stateHandler={errorStateHandler}
        ></ErrorModal>
      )}
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
    </div>
  );
}
