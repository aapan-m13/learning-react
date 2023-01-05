import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

export default function ExpenseItem(props) {
  console.log(props.data);
  return (
    <div className="expense-item">
      <ExpenseDate date={props.data.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.data.title}</h2>
        <div className="expense-item__price">{`$${props.data.amount}`}</div>
      </div>
    </div>
  );
}
