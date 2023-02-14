import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import React, { useState } from "react";

export default function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const yearSelectionHandler = (selectedData) => {
    setSelectedYear((prevState) => {
      return selectedData;
    });
  };
  const expenses = props.expenseData.map((elm) => {
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
