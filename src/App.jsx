import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState("");
  const [currentInput, setCurrentInput] = useState("");
  const [operationDone, setOperationDone] = useState(false);
  const [error, setError] = useState(false);
  const [storedValue, setStoredValue] = useState("");
  const [operator, setOperator] = useState("");

  const handleClick = e => {
    const input = e.target.id;

    if (error || operationDone) {
      setResult("");
      setCurrentInput("");
      setOperationDone(false);
      setError(false);
    }

    if (input === '.' && currentInput.includes('.')) return;

    if (!isNaN(input) || input === '.') {
      if (currentInput.length < 9) {
        setCurrentInput(prev => prev + input);
        setResult(prev => prev + input);
      }
    } else {
      if (input === '+' || input === '-' || input === '*' || input === '/') {
        setStoredValue(currentInput); 
        setCurrentInput(""); 
        setOperator(input); 
        setResult(""); 
      }
    }
  };

  const clear = () => {
    setResult("");
    setCurrentInput("");
    setStoredValue("");
    setOperator("");
    setOperationDone(false);
    setError(false);
  };

  const deleteElement = () => {
    const updatedResult = result.slice(0, -1);
    setResult(updatedResult);
    if (!isNaN(result.slice(-1)) || result.slice(-1) === '.') {
      setCurrentInput(currentInput.slice(0, -1));
    }
  };

  const calculate = () => {
    try {
      const evaluation = eval(`${storedValue}${operator}${currentInput}`);
      if (evaluation < 0 || evaluation > 999999999) {
        setResult("ERROR");
        setError(true);
      } else {
        const evaluationStr = evaluation.toString();
        if (evaluationStr.length > 9) {
          setResult(evaluationStr.slice(0, 9));
        } else {
          setResult(evaluationStr);
        }
        setCurrentInput(evaluationStr);
      }
      setOperationDone(true);
    } catch (error) {
      setResult("ERROR");
      setError(true);
    }
  };

  const handleFirstClickAfterError = e => {
    const input = e.target.id;
    setResult(input);
    setCurrentInput(isNaN(input) ? "" : input);
    setOperationDone(false);
    setError(false);
  };

  const toggleSign = () => {
    if (result === "") return;

    let updatedResult = result;
    if (result[0] === '-') {
      updatedResult = result.slice(1);
    } else if (result.length < 9) {
      updatedResult = '-' + result;
    }

    setResult(updatedResult);
    setCurrentInput(updatedResult);
  };

  return (
    <div className="calculator">
      <input type="text" value={result} disabled />
      <div className="buttons">
        <button className="operator1" onClick={clear}>AC</button>
        <button className="operator1" onClick={deleteElement}>DEL</button>
        <button id='+/-' className="operator" onClick={toggleSign}>+/-</button>

        <button id='/' className="operator" onClick={error || operationDone ? handleFirstClickAfterError : handleClick}>/</button>

        <button id='7' className="number" onClick={error || operationDone ? handleFirstClickAfterError : handleClick}>7</button>
        <button id='8' className="number" onClick={error || operationDone ? handleFirstClickAfterError : handleClick}>8</button>
        <button id='9' className="number" onClick={error || operationDone ? handleFirstClickAfterError : handleClick}>9</button>
        <button id='*' className="operator" onClick={error || operationDone ? handleFirstClickAfterError : handleClick}>*</button>

        <button id='4' className="number" onClick={error || operationDone ? handleFirstClickAfterError : handleClick}>4</button>
        <button id='5' className="number" onClick={error || operationDone ? handleFirstClickAfterError : handleClick}>5</button>
        <button id='6' className="number" onClick={error || operationDone ? handleFirstClickAfterError : handleClick}>6</button>
        <button id='-' className="operator" onClick={error || operationDone ? handleFirstClickAfterError : handleClick}>-</button>

        <button id='1' className="number" onClick={error || operationDone ? handleFirstClickAfterError : handleClick}>1</button>
        <button id='2' className="number" onClick={error || operationDone ? handleFirstClickAfterError : handleClick}>2</button>
        <button id='3' className="number" onClick={error || operationDone ? handleFirstClickAfterError : handleClick}>3</button>
        <button id='+' className="operator" onClick={error || operationDone ? handleFirstClickAfterError : handleClick}>+</button>

        <button id='0' className="number" onClick={error || operationDone ? handleFirstClickAfterError : handleClick}>0</button>
        <button id='.' className="operator" onClick={error || operationDone ? handleFirstClickAfterError : handleClick}>.</button>

        <button id='=' className="operator col-span-2" onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default App;
