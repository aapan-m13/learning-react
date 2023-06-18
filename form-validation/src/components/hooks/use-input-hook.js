import { useState } from "react";

export default function useInput(validate) {
  const [enteredValue, setEnteredValue] = useState("");
  const [touched, setTouched] = useState(false);

  const valueIsValid = validate(enteredValue);
  const hasError = !valueIsValid && touched;

  const valueInputHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setTouched(true);
  };

  return {
    value: enteredValue,
    hasError,
    valueInputHandler,
    inputBlurHandler,
  };
}
