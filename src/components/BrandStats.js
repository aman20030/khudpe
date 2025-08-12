import React from "react";

export default function BrandStats() {
  return (
    <div className="chart-card">
      <div className="chart-card-header">
        <span>Brand Statistics</span>
        <select>
          <option>Monthly</option>
        </select>
      </div>
      <div className="bar-chart">
        <div style={{ height: "22%" }}></div>
        <div style={{ height: "31%" }}></div>
        <div style={{ height: "33%" }}></div>
        <div style={{ height: "47%" }}></div>
      </div>
      <ul>
        <li>MAX</li>
        <li>Trends</li>
        <li>Vijetha</li>
      </ul>
    </div>
  );
}
