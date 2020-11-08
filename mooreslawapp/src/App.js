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

const getTransistors = row => {
  Number(
    row["MOS transistor count"]
      .replace(/\[.*\]/g, "")
      .replace(/[^0-9]/g, "")
  );
}
 
// The useEffect will be replaced when actual data is loaded
const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async() => {
      const datas = await Promise.all([
        d3.csv("data/microprocessors.csv", row => ({	
          name: getName(row, "CPU"),	
          designer: row["Designer"],	
          year: getYear(row),	
          transistors: getTransistors(row),	
          type: "CPU"	
        })),	
        d3.csv("data/gpus.csv", row => ({	
            name: getName(row, "GPU"),	
            designer: row["Designer"],	
            year: getYear(row),	
            transistors: getTransistors(row),	
            type: "GPU"	
        }))
      ])
    })
  }, {});

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
