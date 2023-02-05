import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import React from "react";

export default function Expenses(props) {
  const yearSelectionHandler = (selectedData) => {
    console.log(`from expenses, ${selectedData}`);
  };
  const expenses = props.expenseData.map((elm) => {
    return (
      <div>
        <ExpensesFilter selectedYear={yearSelectionHandler}></ExpensesFilter>
        <ExpenseItem data={elm} key={elm.id}></ExpenseItem>;
      </div>
    );
  });

  return <div>{expenses}</div>;
}
