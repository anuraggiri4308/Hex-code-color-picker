import { useState } from "react";
import "./App.css";

function App() {
  const [backgroundInput, setBackgroundInput] = useState();

  function handleInput(e) {
    setBackgroundInput(e.target.value);
  }
  document.body.style = `background: ${backgroundInput};`;

  return (
    <div className="container">
      <input
        type="text"
        className="input-box"
        required
        onChange={handleInput}
        placeholder="#Hexcode"
      />
      <h3>Input Hex Colors</h3>
    </div>
  );
}

export default App;
