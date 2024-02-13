import React from "react";

export default function Display({ value, result }) {
  return (
    <div className="result-container">
      <div className="active-numbers">
        <span>{value}</span>
      </div>
      <div className="result">
        <span>{result}</span>
      </div>
    </div>
  );
}
