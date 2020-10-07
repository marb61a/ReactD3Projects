import React from 'react';
import './App.css';

import * as d3 from "d3";
import Scatterplot from "./Scatterplot"

const data = d3
  .range(100)
  .map(_ => [
    Math.random(),
    Math.random()
  ]);

function App() {
  return (
    <div className="App">
      <svg width="800" height="800"> 
        <Scatterplot x={50} y={50} data={data} />
      </svg>
    </div>
  );
}

export default App;
