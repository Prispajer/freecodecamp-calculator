import React from "react";
import "./App.css";
import Display from "./Display";
import Buttons from "./Buttons";

function App() {
  const [value, setValue] = React.useState("0");
  const [result, setResult] = React.useState("");

  const resetCalculator = () => {
    setResult("");
    setValue("0");
  };

  const handleInput = (value) => {
    switch (value) {
      case "AC":
        resetCalculator();
        break;
      default:
        break;
    }
  };

  return (
    <div className="app">
      <div className="calculator-container">
        <Display value={value} result={result} />
        <Buttons handleInput={handleInput} />
      </div>
    </div>
  );
}

export default App;
