import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  // 3.1 State Management
  const [display, setDisplay] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const handleChange = (event) => {
    setDisplay(event.target.value);
  };
  
  const handleClick = (event) => {
    const value = event.target.innerText;

    if (value === "AC") {
      setDisplay("");
    } 
    else if (value === "=") {
      try {
        const result = eval(display);

        setDisplay(String(result));
        setHistory([...history, display + " = " + result]);
      } 
      catch {
        setDisplay("Error");
      }
    } 
    else {
      setDisplay(display + value);
    }
  };
  // 3.4 Conditional Rendering
  const message =
    display === "Error"
      ? "Invalid calculation"
      : display === ""
      ? "Enter a calculation"
      : "";

  // Calculator buttons
  const buttons = [
    "AC", "+/-", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
  ];

  return (
    <div className="calculator-container">
      <div className="calculator">

        <h1>Simple Calculator</h1>
        {/* 3.2 Controlled Component */}
        <input
          type="text"
          value={display}
          onChange={handleChange}
          className="display"
          placeholder="0"
        />

        {/* Conditional Rendering */}
        {message && (
          <p className="message">{message}</p>
        )}

        {/* 3.3 Event Handling + .map() + Keys */}
        <div className="buttons">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={handleClick}
            >
              {button}
            </button>
          ))}
        </div>

        {/* Dynamic UI — Toggle */}
        <button
          className="history-btn"
          onClick={() => setShowHistory(!showHistory)}
        >
          {showHistory ? "Hide History" : "Show History"}
        </button>

        {/* Conditional Rendering */}
        {showHistory && (
          <div className="history">
            <h3>Calculation History</h3>

            {history.length > 0 ? (
              history.map((item, index) => (
                <p key={index}>{item}</p>
              ))
            ) : (
              <p>No calculations yet</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
export default Calculator;