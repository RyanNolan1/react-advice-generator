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
    <div className="advice-container">
      <h1>ADVICE #117</h1>
      <p>
        “It is easy to sit up and take notice, what's difficult is getting up
        and taking action.”
      </p>
      <div>
        <img src={patternDivider} alt="Pattern Divider" />
      </div>
      <img src={dice} alt="Dice Icon" />
    </div>
  );
}

export default App;
