import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function ChartComponent({ expenses, income }) {
  const categories = [...new Set(expenses.map((e) => e.category))];
  const data = {
    labels: categories,
    datasets: [
      {
        label: "Expenses",
        data: categories.map(
          (cat) =>
            expenses.filter((e) => e.category === cat).reduce((sum, e) => sum + e.amount, 0)
        ),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
      },
    ],
  };

  return (
    <div className="card">
      <h2>Expenses vs Income</h2>
      <Pie data={data} />
      <p>Total Income: ₹{income}</p>
    </div>
  );
}

export default ChartComponent;
