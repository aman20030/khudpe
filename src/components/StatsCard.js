import React from "react";

export default function StatsCard({ title, value, change }) {
  return (
    <div className="stats-card">
      <div className="stats-card-header">
        <span>{title}</span>
        <select>
          <option>Monthly</option>
          <option>Weekly</option>
        </select>
      </div>
      <h2>{value}</h2>
      <p className="positive-change">{change}</p>
    </div>
  );
}
