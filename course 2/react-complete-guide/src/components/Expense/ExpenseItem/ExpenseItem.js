import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../UI/Card/Card";

export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.data.title);

  const changeTitle = () => {
    setTitle("updated");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.data.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{`$${props.data.amount}`}</div>
        <button onClick={changeTitle}>Change Title</button>
      </div>
    </Card>
  );
}
