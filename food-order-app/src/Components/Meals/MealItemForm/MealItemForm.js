import React, { useRef } from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

export default function MealItemForm(props) {
  const amountInputRef = useRef();

  const amountSubmitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    props.addToCart(+enteredAmount);
  };

  return (
    <form onSubmit={amountSubmitHandler} className={styles["form"]}>
      <Input
        input={{
          id: `amount__ ${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        label="Amount"
        ref={amountInputRef}
      ></Input>
      <button>+ Add</button>
    </form>
  );
}
