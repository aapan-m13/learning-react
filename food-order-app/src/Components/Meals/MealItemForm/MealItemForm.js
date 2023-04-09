import React from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

export default function MealItemForm() {
  const amountSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={amountSubmitHandler} className={styles["form"]}>
      <Input
        input={{
          id: "meal_amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        label="Amount"
      ></Input>
      <button>+ Add</button>
    </form>
  );
}
