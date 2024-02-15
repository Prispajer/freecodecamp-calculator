import React from "react";
import "./App.css";
import Display from "./Display";
import Buttons from "./Buttons";
import { numbers, operators } from "./Data";

function App() {
  const [currentNumber, setCurrentNumber] = React.useState("");
  const [previousNumber, setPreviousNumber] = React.useState("");

  console.log(currentNumber);
  console.log(previousNumber);

  const handleSubmit = () => {
    const summaryResult = eval(currentNumber);
    setPreviousNumber(`${summaryResult}`);
    setCurrentNumber("");
  };

  const resetCalculator = () => {
    setCurrentNumber("");
    setPreviousNumber("");
  };

  const handleNumbers = (value) => {
    setCurrentNumber(`${value}${currentNumber}`);

    setCurrentNumber(`${previousNumber}${currentNumber}`);
    setCurrentNumber((prevNumber) => prevNumber + value);
  };

  const handleDot = (value) => {
    if (currentNumber === "") {
      setCurrentNumber(`0${value}`);
    } else if (!currentNumber.includes(".")) {
      setCurrentNumber(`${currentNumber}${value}`);
    }
  };

  const handleOperators = (value) => {
    let firstChar = currentNumber.charAt(0);
    let lastChar = currentNumber.charAt(currentNumber.length - 1);

    if (firstChar === operators && currentNumber === "-") {
      return (firstChar = "");
    }

    if (operators.includes(firstChar)) {
      setCurrentNumber(currentNumber.slice(0, -1) + value);
      return;
    } else if (operators.includes(lastChar)) {
      return;
    }

    setCurrentNumber(`${currentNumber + value}`);
  };

  const handleInput = (value) => {
    const number = numbers.find((match) => match === value);
    const operator = operators.find((match) => match === value);
    const dot = ".";
    switch (value) {
      case "AC":
        resetCalculator();
        break;
      case "=":
        handleSubmit();
        break;
      case number:
        handleNumbers(value);
        break;
      case operator:
        handleOperators(value);
        break;
      case dot:
        handleDot(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="app">
      <div className="calculator-container">
        <Display currentNumber={currentNumber} showResult={previousNumber} />
        <Buttons handleInput={handleInput} />
      </div>
    </div>
  );
}

export default App;
