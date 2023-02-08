import Expenses from "./components/Expense/Expenses/Expenses";
import "./components/Expense/Expenses/expenses.css";
import Card from "./components/UI/Card/Card";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpense = (newExpenseData) => {
    expenses.push(newExpenseData);
    console.log(expenses);
  };

  return (
    <div>
      <Card className="expenses">
        <NewExpense onAddExpense={addExpense}></NewExpense>
        <Expenses expenseData={expenses}></Expenses>
      </Card>
    </div>
  );
};

export default App;
