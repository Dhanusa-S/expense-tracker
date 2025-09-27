import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import IncomeForm from "./components/IncomeForm";
import BudgetForm from "./components/BudgetForm";
import ChartComponent from "./components/Chart";
import "./styles.css";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  const [income, setIncome] = useState(() => {
    const saved = localStorage.getItem("income");
    return saved ? JSON.parse(saved) : 0;
  });

  const [budget, setBudget] = useState(() => {
    const saved = localStorage.getItem("budget");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    localStorage.setItem("income", JSON.stringify(income));
    localStorage.setItem("budget", JSON.stringify(budget));
  }, [expenses, income, budget]);

  const addExpense = (expense) => setExpenses([...expenses, expense]);
  const addIncome = (amount) => setIncome(income + amount);
  const setCategoryBudget = (category, amount) =>
    setBudget({ ...budget, [category]: amount });

  return (
    <div className="container">
      <h1>💰 Expense Tracker</h1>
      <IncomeForm addIncome={addIncome} />
      <BudgetForm setCategoryBudget={setCategoryBudget} />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} budget={budget} />
      <ChartComponent expenses={expenses} income={income} />
    </div>
  );
}

export default App;
