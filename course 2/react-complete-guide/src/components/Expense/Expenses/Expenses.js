import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "../ExpenseList/ExpenseList";
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

  return (
    <div>
      <ExpensesFilter
        selectedYr={selectedYear}
        selectYear={yearSelectionHandler}
      ></ExpensesFilter>
      <ExpenseList items={filteredExpenses}></ExpenseList>
    </div>
  );
}
