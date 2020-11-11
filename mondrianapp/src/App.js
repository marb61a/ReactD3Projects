import React, { useState, useMemo } from "react";
import * as d3 from "d3";
import './App.css';

import Mondrian from './Mondrian';
import useMondrianGenerator from "./useMondrianGenerator";

const Range = ({ name, value, onChnage }) => {
  return(
    <div style={{ display: "inline-block" }}>
      {name}
      <br />
      <input
        type="range"
        name={name}
        min={0}
        max={1}
        step={0.1}
        value={value}
        onChange={event => onChange(Number(event.target.value))}
      />      
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <h1>Piet Mondrian Art Generator</h1>
        
      </header>
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
