import React from "react";
import "./ExpenseItem.css";

export default function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>31 March, 2023</div>
      <div className="expense-item__description">
        <h2>Car insurance</h2>
        <div className="expense-item__price">100.00</div>
      </div>
    </div>
  );
}
