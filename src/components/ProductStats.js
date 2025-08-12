import React from "react";

export default function ProductStats() {
  return (
    <div className="chart-card">
      <div className="chart-card-header">
        <span>Product Statistics</span>
        <select>
          <option>Monthly</option>
        </select>
      </div>
      <div className="donut-chart"></div>
      <ul>
        <li>Snacks</li>
        <li>Electronics</li>
        <li>Beauty</li>
      </ul>
    </div>
  );
}
