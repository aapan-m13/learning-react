import React from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

export default function NewExpense(props) {
  const newExpenseAddHandler = (expenseData) => {
    const newData = {
      id: Math.random().toString(),
      ...expenseData,
    };
    props.onAddExpense(newData);
  };

  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpense={newExpenseAddHandler}></NewExpenseForm>
    </div>
  );
}
