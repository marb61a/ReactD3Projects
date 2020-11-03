import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as d3 from "d3";
import faker from "faker";

import Barchart from './Barchart';

const Svg = styled.svg`
    width: 100vw;
    height: 100vh;
    background: #0b0c10;
`;

function App() {
  const [data, setData] = useState(null);
  const yearIndex = d3
    .scaleLinear()
    .domain([1970, 2025])
    .range([0, 2025 - 1970]);
  
  // If possible use D3 timers rather than the JS equivalent
  // D3 timers are more intelligent
  useEffect(() => {
    const interval = d3.interval(() => {

    })
  }, []);

  return (
    <svg>
      {data ? (
        <Barchart 
        
        />
      ) : null}
    </svg>
  );
}

export default App;
