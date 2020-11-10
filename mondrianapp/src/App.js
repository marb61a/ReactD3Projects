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
      >
          <Mondrian 
            x={100}
            y={10}
            width={1000}
            height={1000}
          />
      </svg>
    </div>
  );
}

export default App;
