import React from "react";

function ExpenseList({ expenses, budget }) {
  return (
    <div className="card">
      <h2>Expense List</h2>
      <ul>
        {expenses.map((exp, i) => (
          <li key={i}>
            {exp.date} - {exp.category}: ₹{exp.amount} ({exp.note})
            {budget[exp.category] && exp.amount > budget[exp.category] && (
              <span style={{ color: "red" }}> ⚠ Over Budget!</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
