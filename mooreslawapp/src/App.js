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

const getYear = row => {
    Number(row["Date of introduction"].replace(/\[.*\]/g, ""));
}

const getName = (row, type) => {
    `${row["Processor"].replace(/\(.*\)/g, "")} (${type})`;
}

// This will be replaced when actual data is loaded
const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const processors = d3
      .range(10)
      .map(i => `CPU ${i}`);
    const random = d3.randomUniform(1000, 50000);

    // Will add a processor every 15 seconds
    let N = 1;

    // Create random transistor counts for every year
    const data = d3
      .range(1970, 2026)
      .map(year => {
        if(year % 5 === 0 && N < 10){
          N += 1;
        }

        return d3
          .range(N)
          .map(i => ({
            year: year,
            name: processors[i],
            transistors: Math.round(random())
          }))
      });

      setData(data);
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
      setCurrentYear(year => {
        if (!data[year + 1]) {
            interval.stop();
            return year;
        }

        return year + 1;
      });
    }, 2000);

    return () => interval.stop();
  }, [data]);

  return (
    <svg x={"50%"} y={30}>
      <Title>
        Moore's law vs. actual transistor count in React & D3
      </Title>
      <Barchart 
        data={[
          ...((data && data[currentYear]) || []),
          {
            name: "Moore's law",
            designer: "Moore",
            year: currentYear,
            type: "",
            transistors: mooresLaw[currentYear]
          }
        ]}
        x={100}
        y={50}
        barThickness={20}
        width={500}
      />
      <Year x={"95%"} y={"95%"}>
        {currentYear}
      </Year>
    </svg>
  );
}

export default App;
