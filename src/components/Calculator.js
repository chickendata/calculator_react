import React, { useState } from "react";
import "./calculator.css";

function Calculator() {
  const [viewResult, setViewResult] = useState("0");
  const [result, setResult] = useState(null);
  const [operator, setOperator] = useState("");

  const handleNumericChange = (value) => {
    if (value === "0" && viewResult === "0") {
      return;
    }
    if (viewResult === "0" && value === ".") {
      setViewResult("0.");
    } else {
      if (viewResult.includes(".") && value === ".") {
        return;
      } else {
        if (viewResult !== "0") {
          setViewResult(viewResult + value);
        } else {
          setViewResult(value);
        }
      }
    }
  };

  const handleDelete = () => {
    if (viewResult === "0") {
      return;
    } else {
      setViewResult(viewResult.slice(0, -1));
    }
  };

  const handleOperator = (value) => {
    if (viewResult !== "0") {
      setResult(viewResult);
      setViewResult("0");
    }

    setOperator(value);
  };

  const handleAC = () => {
    setViewResult("0");
    setResult("");
  };

  const handleEqual = () => {
    switch (operator) {
      case "/":
        const divisionResult = +result / +viewResult;
        setViewResult("0");
        setResult(String(divisionResult));
        break;
      case "*":
        const multiplyResult = +result * +viewResult;
        setViewResult("0");
        setResult(String(multiplyResult));
        break;
      case "-":
        const minusResult = +result - +viewResult;
        setViewResult("0");
        setResult(String(minusResult));
        break;
      case "+":
        const sumResult = +result + +viewResult;
        setViewResult("0");
        setResult(String(sumResult));
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="result">
          <input
            className="view-result"
            type="text"
            value={viewResult}
            name="viewResult"
          />
          <input
            className="input-result"
            type="text"
            value={result}
            name="result"
          />
        </div>
        <div className="digits">
          <button onClick={() => handleAC()}>AC</button>
          <button onClick={() => handleDelete()}>DEL</button>
          <button onClick={() => handleOperator("/")}>/</button>
          <button onClick={() => handleNumericChange("7")}>7</button>
          <button onClick={() => handleNumericChange("8")}>8</button>
          <button onClick={() => handleNumericChange("9")}>9</button>
          <button onClick={() => handleOperator("*")}>*</button>
          <button onClick={() => handleNumericChange("4")}>4</button>
          <button onClick={() => handleNumericChange("5")}>5</button>
          <button onClick={() => handleNumericChange("6")}>6</button>
          <button onClick={() => handleOperator("-")}>-</button>
          <button onClick={() => handleNumericChange("1")}>1</button>
          <button onClick={() => handleNumericChange("2")}>2</button>
          <button onClick={() => handleNumericChange("3")}>3</button>
          <button onClick={() => handleOperator("+")}>+</button>
          <button onClick={() => handleNumericChange("0")}>0</button>
          <button onClick={() => handleNumericChange(".")}>.</button>
          <button onClick={() => handleEqual()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
