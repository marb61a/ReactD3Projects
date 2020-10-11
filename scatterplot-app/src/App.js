import React from 'react';
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
            y={350} 
            data={data} 
            width={this.state.width} 
            height={this.state.height} 
            datapoint={({ x, y}) => <Datapoint x={x} y={y} />}
          />
        </svg>
      </div>
    );
  }
}

export default App;
