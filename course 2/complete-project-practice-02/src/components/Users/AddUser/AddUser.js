import React, { useState, useRef } from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/Error/ErrorModal";
import styles from "./AddUser.module.css";

export default function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [errorState, setErrorState] = useState(false);

  const addUserSubmitHandler = (event) => {
    event.preventDefault();

    const userNameInput = nameInputRef.current.value;
    const userAgeInput = ageInputRef.current.value;

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";

    if (userNameInput.trim().length < 2) {
      setErrorState(true);
      return;
    }

    if (+userAgeInput < 1) {
      setErrorState(true);
      return;
    }

    const data = {
      key: (Math.random() + 1).toString(36).substring(7),
      name: userNameInput,
      age: userAgeInput,
    };
    props.addUsers(data);
  };

  const errorStateHandler = () => {
    setErrorState(false);
  };

  return (
    <React.Fragment>
      {errorState && (
        <ErrorModal
          title="error"
          message="Empty data Cannot be inserted"
          stateHandler={errorStateHandler}
        ></ErrorModal>
      )}
      <Card className={styles["input"]}>
        <form onSubmit={addUserSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef}></input>
          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={ageInputRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
}
