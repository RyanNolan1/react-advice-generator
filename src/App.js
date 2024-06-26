import patternDivider from "./images/pattern-divider-mobile.svg";
import dice from "./images/icon-dice.svg";
import { useState } from "react";

function App() {
  const [advice, setAdvice] = useState([]);

const getAdvice = async () => {
  try {
    const timestamp = Date.now(); // Get the current timestamp
    const url = `https://api.adviceslip.com/advice?timestamp=${timestamp}`; // Append timestamp as a query parameter
    const data = await (await fetch(url)).json();
    setAdvice(data.slip);
  } catch (err) {
    setAdvice("App Error!");
  }
};

  return (
    <div className="app-container">
      <Advice advice={advice} onSetAdvice={getAdvice} />
    </div>
  );
}

function Advice({ onSetAdvice, advice }) {
  return (
    <div className="advice-dice-container">
      <div className="advice-container">
        <h1 className="advice-header">ADVICE #{advice.id}</h1>
        <p className="advice-text">{advice.advice}</p>
        <div>
          <img
            className="pattern-divider"
            src={patternDivider}
            alt="Pattern Divider"
          />
        </div>
      </div>
      <div onClick={() => onSetAdvice()} className="dice-container">
        <img src={dice} alt="Dice Icon" />
      </div>
    </div>
  );
}

export default App;
