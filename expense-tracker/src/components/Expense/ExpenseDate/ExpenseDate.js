import "./ExpenseDate.css";

import React from "react";
import Card from "../../UI/Card/Card";

export default function ExpenseDate(props) {
  // console.log(props);
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <Card className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{day}</div>
      <div className="expense-date__day">{year}</div>
    </Card>
  );
}
