import "./App.css";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };
  const calculate = () => {
    try {
      setInput(eval(input));
    } catch {
      setInput("Error");
    }
  };

  const clearInput = () => {
    setInput("");
  };

  return (
    <div className="app">
      <div className="calculator">
        <div className="display">{input || "0"}</div>
        <div className="buttons">
          {/* Sayı ve operatör düğmeleri */}
          {[7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", 0, ".", "+"].map(
            (item) => (
              <button key={item} onClick={() => handleClick(item.toString())}>
                {item}
              </button>
            )
          )}
          <button onClick={clearInput}>C</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}
export default App;
