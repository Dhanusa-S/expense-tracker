import React, { useState } from "react";

function IncomeForm({ addIncome }) {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(parseFloat(amount));
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h2>Add Income</h2>
      <input type="number" placeholder="Income Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <button type="submit">Add Income</button>
    </form>
  );
}

export default IncomeForm;
