import ExpenseItem from "../ExpenseItem/ExpenseItem";
import React from "react";

export default function Expenses(props) {
  const expenses = props.expenseData.map((elm) => {
    return <ExpenseItem data={elm} key={elm.id}></ExpenseItem>;
  });

  return <div>{expenses}</div>;
}
