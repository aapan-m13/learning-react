import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../UI/Card/Card";

export default function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.data.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.data.title}</h2>
        <div className="expense-item__price">{`$${props.data.amount}`}</div>
        <button>Change Title</button>
      </div>
    </Card>
  );
}
