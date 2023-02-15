import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import React, { useState } from "react";

export default function Expenses(props) {
  console.log(props.expenseData);

  const [selectedYear, setSelectedYear] = useState("2020");

  const yearSelectionHandler = (selectedData) => {
    setSelectedYear((prevState) => {
      return selectedData;
    });
  };

  const filteredExpenses = props.expenseData.filter((elm) => {
    return elm.date.getYear() === selectedYear - 1900;
  });

  const expenses = filteredExpenses.map((elm) => {
    return <ExpenseItem data={elm} key={elm.id}></ExpenseItem>;
  });

  return (
    <div>
      <ExpensesFilter
        selectedYr={selectedYear}
        selectYear={yearSelectionHandler}
      ></ExpensesFilter>
      {expenses}
    </div>
  );
}
