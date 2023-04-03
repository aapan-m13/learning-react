import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

export default function ExpenseList(props) {
  const expenses = props.items.length ? (
    props.items.map((elm) => {
      return (
        <div key={elm.id} className="expenses-list">
          <ExpenseItem data={elm}></ExpenseItem>
        </div>
      );
    })
  ) : (
    <p className="expenses-list__fallback">No expesenses found</p>
  );
  return <div>{expenses}</div>;
}
