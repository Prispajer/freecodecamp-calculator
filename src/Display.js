import React from "react";

export default function Display({ currentNumber, showResult }) {
  return (
    <div className="result-container">
      <div className="active-numbers">
        <span>{currentNumber}</span>
      </div>
      <div className="result">
        <span>{showResult}</span>
      </div>
    </div>
  );
}
