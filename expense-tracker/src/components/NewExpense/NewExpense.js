import React, { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

export default function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const newExpenseAddHandler = (expenseData) => {
    const newData = {
      id: Math.random().toString(),
      ...expenseData,
    };
    props.onAddExpense(newData);
    setIsEditing(() => {
      return false;
    });
  };

  const editingHandler = () => {
    setIsEditing((prevState) => {
      return true;
    });
  };

  const cancelingHandler = () => {
    setIsEditing(() => {
      return false;
    });
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
      {isEditing && (
        <NewExpenseForm
          onSaveExpense={newExpenseAddHandler}
          onCancelEditing={cancelingHandler}
        ></NewExpenseForm>
      )}
    </div>
  );
}
