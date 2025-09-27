import React, { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Groceries");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ amount: parseFloat(amount), category, date, note });
    setAmount("");
    setCategory("Groceries");
    setDate("");
    setNote("");
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h2>Add Expense</h2>
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Groceries</option>
        <option>Transportation</option>
        <option>Entertainment</option>
        <option>Other</option>
      </select>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input type="text" placeholder="Note" value={note} onChange={(e) => setNote(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}

export default ExpenseForm;
