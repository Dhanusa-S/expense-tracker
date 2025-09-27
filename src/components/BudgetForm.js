import React, { useState } from "react";

function BudgetForm({ setCategoryBudget }) {
  const [category, setCategory] = useState("Groceries");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategoryBudget(category, parseFloat(amount));
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h2>Set Budget</h2>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Groceries</option>
        <option>Transportation</option>
        <option>Entertainment</option>
        <option>Other</option>
      </select>
      <input type="number" placeholder="Budget Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <button type="submit">Set</button>
    </form>
  );
}

export default BudgetForm;
