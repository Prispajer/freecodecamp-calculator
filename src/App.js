import React from "react";
import "./App.css";
import Display from "./Display";
import Buttons from "./Buttons";
import { numbers, operators } from "./Data";

function App() {
  const [currentNumber, setCurrentNumber] = React.useState("");
  const [previousNumber, setPreviousNumber] = React.useState("");
  const [getResult, setGetResult] = React.useState("");

  console.log(currentNumber);
  console.log(previousNumber);
  console.log(getResult);

  const handleSubmit = () => {
    const summaryResult = eval(currentNumber);
    setGetResult(`${summaryResult}`);
    setCurrentNumber("");
    setPreviousNumber(`${summaryResult}`);
  };

  const resetCalculator = () => {
    setGetResult("");
    setCurrentNumber("");
    setPreviousNumber("");
  };

  const handleNumbers = (value) => {
    if (currentNumber === "0") {
    } else if (previousNumber) {
      setCurrentNumber(`${previousNumber}${currentNumber}`);
    }
    setCurrentNumber((prevNumber) => prevNumber + value);
    setGetResult(`${value}`);
  };

  const handleOperators = (value) => {
    const operator = operators.find((match) => match === value);
    const firstCharOperator = currentNumber.charAt(0);
    const lastCharOperator = currentNumber.charAt(currentNumber.length - 1);

    if (
      operators.includes(lastCharOperator) ||
      operators.includes(firstCharOperator)
    ) {
      setCurrentNumber(currentNumber.slice(0, -1) + value);
      setGetResult(currentNumber.slice(0, -1) + value);
      return;
    }

    setCurrentNumber(`${currentNumber + value}`);
    setGetResult(`${currentNumber + value}`);

    return `${value + operator}`;
  };

  const handleOutput = () => {
    setPreviousNumber(getResult);
  };

  React.useState(() => {
    handleOutput();
  }, [currentNumber]);

  const handleInput = (value) => {
    const number = numbers.find((match) => match === value);
    const operator = operators.find((match) => match === value);
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
