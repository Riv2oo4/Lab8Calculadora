import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';


const Calculator = () => {
  const [result, setResult] = useState("");
  const [currentInput, setCurrentInput] = useState("");
  const [operationDone, setOperationDone] = useState(false);
  const [error, setError] = useState(false);

  const handleClick = e => {
    const input = e.target.id;

    if (error || operationDone) {
      setResult("");
      setCurrentInput("");
      setOperationDone(false);
      setError(false);
    }

    if (input === '.' && currentInput.includes('.')) return;

    if (currentInput.length < 9 || isNaN(input)) {
      setResult(prev => prev + input);
      if (!isNaN(input) || input === '.') {
        setCurrentInput(prev => prev + input);
      } else {
        setCurrentInput("");
      }
    }
  };

  const clear = () => {
    setResult("");
    setCurrentInput("");
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
      const evaluation = eval(result);
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
      <Display value={result} />
      <div className="buttons">
        <Button id="AC" label="AC" onClick={clear} />
        <Button id="DEL" label="DEL" onClick={deleteElement} />
        <Button id="+/-" label="+/-" onClick={toggleSign} />
        <Button id="/" label="/" onClick={error || operationDone ? handleFirstClickAfterError : handleClick} />
        <Button id="7" label="7" onClick={error || operationDone ? handleFirstClickAfterError : handleClick} />
        <Button id="8" label="8" onClick={error || operationDone ? handleFirstClickAfterError : handleClick} />
        <Button id="9" label="9" onClick={error || operationDone ? handleFirstClickAfterError : handleClick} />
        <Button id="*" label="*" onClick={error || operationDone ? handleFirstClickAfterError : handleClick} />
        <Button id="4" label="4" onClick={error || operationDone ? handleFirstClickAfterError : handleClick} />
        <Button id="5" label="5" onClick={error || operationDone ? handleFirstClickAfterError : handleClick} />
        <Button id="6" label="6" onClick={error || operationDone ? handleFirstClickAfterError : handleClick} />
        <Button id="-" label="-" onClick={error || operationDone ? handleFirstClickAfterError : handleClick} />
        <Button id="1" label="1" onClick={error || operationDone ? handleFirstClickAfterError : handleClick} />
        <Button id="2" label="2" onClick={error || operationDone ? handleFirstClickAfterError : handleClick} />
        <Button id="3" label="3" onClick={error || operationDone ? handleFirstClickAfterError : handleClick} />
        <Button id="+" label="+" onClick={error || operationDone ? handleFirstClickAfterError : handleClick} />
        <Button id="0" label="0" onClick={error || operationDone ? handleFirstClickAfterError : handleClick} />
        <Button id="." label="." onClick={error || operationDone ? handleFirstClickAfterError : handleClick} />
        <Button id="=" label="=" className="col-span-2" onClick={calculate} />
      </div>
    </div>
  );
};

export default Calculator;
