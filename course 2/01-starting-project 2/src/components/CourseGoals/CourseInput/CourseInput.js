import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValidString, setIsValidString] = useState(true);

  const goalInputChangeHandler = (event) => {
    setIsValidString(true);
    setEnteredValue(() => {
      return event.target.value;
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length > 2) {
      props.onAddGoal(enteredValue);
      setEnteredValue("");
    } else {
      setIsValidString(false);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${
          !isValidString ? styles["invalid"] : ""
        }`}
      >
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
