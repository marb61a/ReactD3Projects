import React, { useState } from 'react';
import './App.css';

import * as d3 from "d3";
import Scatterplot from "./Scatterplot"
import Datapoint from './Datapoint';

const data = d3
  .range(100)
  .map(_ => [
    Math.random(),
    Math.random()
  ]);

const data2 = d3
  .range(100)
  .map(_ => [
    Math.random(),
    Math.random()
  ]);

const App = () => {
  const [ dimension, setDimensions ] = useState({
    width: 300,
    height: 300
  });

  const [data, setData] = useState(
    d3.range(100)
      .map(_ => [Math.random(), Math.random()])
  );

  return (
    <div className="App">
      <svg width="800" height="800" onClick={onClick}> 
        <Scatterplot 
          x={50} 
          y={50} 
          data={data} 
          width={this.state.width} 
          height={this.state.height}
          datapoint={({ x, y}) => <Datapoint x={x} y={y} />}
        />
        <Scatterplot 
          x={50} 
          y={450} 
          data={data} 
          width={300} 
          height={200} 
          datapoint={({ x, y}) => <circle cx={x} cy={y} r="5" />}
        />
      </svg>
    </div>
  );
}  

class App extends React.Component{
  state = {
    width: 300,
    height: 200
  };

  onClick = () => this.setState({
    width: this.state.width * 0.8,
    height: this.state.height * 0.8
  });

  render(){
    return (
      <div className="App">
        <svg width="800" height="800" onClick={this.onClick}> 
          <Scatterplot 
            x={50} 
            y={50} 
            data={data} 
            width={this.state.width} 
            height={this.state.height}
            datapoint={({ x, y}) => <Datapoint x={x} y={y} />}
          />
          <Scatterplot 
            x={50} 
            y={450} 
            data={data} 
            width={300} 
            height={200} 
            datapoint={({ x, y}) => <circle cx={x} cy={y} r="5" />}
          />
        </svg>
      </div>
    );
  }
}

export default App;
