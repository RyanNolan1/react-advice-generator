import patternDivider from "./images/pattern-divider-mobile.svg";
import dice from "./images/icon-dice.svg";

function App() {
  return (
    <div className="app-container">
      <Advice />
    </div>
  );
}

function Advice() {
  return (
    <div className="advice-dice-container">
      <div className="advice-container">
        <h1 className="advice-header">ADVICE #117</h1>
        <p className="advice-text">
          “It is easy to sit up and take notice, what's difficult is getting up
          and taking action.”
        </p>
        <div>
          <img src={patternDivider} alt="Pattern Divider" />
        </div>
      </div>
      <div className="dice-container">
        <img src={dice} alt="Dice Icon" />
      </div>
    </div>
  );
}

export default App;
