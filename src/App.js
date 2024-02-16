import React from "react";
import "./App.css";
import Display from "./Display";
import Buttons from "./Buttons";
import { numbers, operators } from "./Data";

function App() {
  const [currentNumber, setCurrentNumber] = React.useState("");
  const [previousNumber, setPreviousNumber] = React.useState("");

  let firstChar = currentNumber.charAt(0);
  let lastChar = currentNumber.charAt(currentNumber.length - 1);

  const handleSubmit = () => {
    const summaryResult = eval(currentNumber);
    setPreviousNumber(`${summaryResult}`);
    if (currentNumber && previousNumber) {
      setCurrentNumber(`${summaryResult}`);
    }

    if (
      operators.includes(lastChar) ||
      operators.some((operator) => currentNumber.includes(operator)) ||
      !lastChar
    ) {
      setCurrentNumber(currentNumber);
    }
  };

  const resetCalculator = () => {
    setCurrentNumber("");
    setPreviousNumber("");
  };

  const handleNumbers = (value) => {
    setCurrentNumber((prevNumber) => prevNumber + value);
  };

  React.useEffect(() => {
    setCurrentNumber(`${previousNumber}`);
  }, [previousNumber]);

  const handleDot = (value) => {
    const intoParts = currentNumber.split(/[-+*/]/);
    const intoPartsLast = intoParts[intoParts.length - 1];

    if (currentNumber === "") {
      setCurrentNumber(`0${value}`);
    } else if (!intoPartsLast.includes(".")) {
      setCurrentNumber(`${currentNumber}${value}`);
    }
  };

  const handleOperators = (value) => {
    if (operators.includes(lastChar)) {
      return;
    } else if (lastChar.includes("-")) {
      return lastChar === "-";
    }

    if (firstChar === "-" || lastChar === "-") {
      setCurrentNumber(`${currentNumber + "-"}`);
    } else {
      setCurrentNumber(`${currentNumber}`);
    }

    setCurrentNumber(`${currentNumber}${value}`);
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
