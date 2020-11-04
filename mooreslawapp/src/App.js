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

const Year = styled.text`
    fill: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    font-size: 120px;
    font-weight: bold;
    text-anchor: end;
`;

const Title = styled.text`
    fill: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    font-size: 26px;
    font-weight: bold;
    text-anchor: middle;
`;

// This will be replaced when actual data is loaded
const useData = () => {
  const [data, setData] = useState(null);

  useEffect(function() {

  }, []);

  return data;
};

function App() {
  const data = useData(); 
  const [currentYear, setCurrentYear] = useState(1970);
  const yearIndex = d3
    .scaleLinear()
    .domain([1970, 2025])
    .range([0, 2025 - 1970]);
  
  // If possible use D3 timers rather than the JS equivalent
  // D3 timers are more intelligent. This is a simle counter
  // which drives the animation
  useEffect(() => {
    const interval = d3.interval(() => {
      // console.log("Interval Ran!");

      if(currentYear > 2025){
        interval.stop();
      }

      setCurrentYear(year => year + 1);
    }, 1000);

    return () => interval.stop();
  }, [data]);

  return (
    <svg x={"50%"} y={30}>
      <Title>
        Moore's law vs. actual transistor count in React & D3
      </Title>

      {data ? (
        <Barchart 
          data={data[0]}
          x={100}
          y={50}
          barThickness={20}
          width={500}
        />
      ) : null}
    </svg>
  );
}

export default App;
