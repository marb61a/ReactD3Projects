import React from "react";
import './App.css';

import Mondrian from './Mondrian';

function App() {
  return (
    <div className="App">
      <h1>Piet Mondrian Art Generator</h1>
      <svg
        width="100%"
        height="100%"
        style={{border: "1px solid red"}}
      >
      </svg>
    </div>
  );
}

export default App;
