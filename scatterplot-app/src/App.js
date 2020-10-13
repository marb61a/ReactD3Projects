import React, { useState } from 'react';
import './App.css';

import * as d3 from "d3";
import Scatterplot from "./Scatterplot"
import Datapoint from './Datapoint';

// const data = d3
//   .range(100)
//   .map(_ => [
//     Math.random(),
//     Math.random()
//   ]);

// const data2 = d3
//   .range(100)
//   .map(_ => [
//     Math.random(),
//     Math.random()
//   ]);

const App = () => {
  const [ dimensions, setDimensions ] = useState({
    width: 300,
    height: 300
  });

  const [data, setData] = useState(
    d3.range(100)
      .map(_ => [Math.random(), Math.random()])
  );

  function onClick(){
    setDimensions({
      width: dimensions.width * 0.7,
      height: dimensions.height * 0.7
    });

  }

  return (
    <div className="App">
      <svg width="800" height="800" onClick={onClick}> 
        <Scatterplot 
          x={50} 
          y={50} 
          data={data} 
          width={dimensions.width} 
          height={dimensions.height}
          datapoint={({ x, y}) => <Datapoint x={x} y={y} />}
        />
        <Scatterplot 
          x={50} 
          y={450} 
          data={data} 
          width={dimensions.width} 
          height={dimensions.height} 
          datapoint={({ x, y}) => <circle cx={x} cy={y} r="5" />}
        />
      </svg>
    </div>
  );
};

export default App;
