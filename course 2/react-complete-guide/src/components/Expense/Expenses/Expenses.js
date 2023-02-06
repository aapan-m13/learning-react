import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import React, { useState } from "react";

export default function Expenses(props) {
  const [selectedYear, setSelecteedYear] = useState("2020");

  const yearSelectionHandler = (selectedData) => {
    setSelecteedYear((prevState) => {
      return selectedData;
    });
  };
  const expenses = props.expenseData.map((elm) => {
    return (
      <div>
        <ExpensesFilter
          selected={selectedYear}
          selectedYear={yearSelectionHandler}
        ></ExpensesFilter>
        <ExpenseItem data={elm} key={elm.id}></ExpenseItem>;
      </div>
    );
  });

  return <div>{expenses}</div>;
}
