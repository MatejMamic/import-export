import logo from "./logo.svg";
import "./App.css";
import auti from "./utilities/auto";
import * as model from "./utilities/function";
function App() {
  return (
    <div className="App">
      <p>moj prvi auto: {model.getAuto(auti.auto1, model.bmw)}</p>
      <p>moj drugi auto: {model.getAuto(auti.auto2, model.mercedes)}</p>
    </div>
  );
}

export default App;
