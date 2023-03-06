import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

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
    if (enteredValue.length > 0) props.onAddGoal(enteredValue);
    else {
      console.log("here");
      setIsValidString(false);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValidString ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
