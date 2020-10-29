import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";
import styled from "styled-components";

import "./styles.css";
import VerticalBarchart from "./VerticalBarchart";

const Button = styled.button`
  cursor: pointer;
  margin-bottom: 1em;
`;

const Svg = styled.svg`
  background: ${({ showKevin }) =>
    showKevin
      ? "url(https://media.giphy.com/media/d2ZjBlsQa5dWO45a/giphy.gif) no-repeat center center"
      : ""};
  background-size: cover;
`;

function App() {
  const [ data, setData ] = useState(null);

  useEffect(() => {
    d3.tsv("./data.tsv", d => {
      const year = Number(d.movie.match(/\((\d+)\)/)[1]);

      return{
        movie: d.movie.replace(/\(\d+\)/, ""),
        year: year,
        per_year: Number(d.box_office) / (2018 - year),
        box_office: Number(d.box_office)
      }
    }).then(setData);
  }, [!data]);

  const [perYear, setPerYear] = useState(false);
  const valueFunction = perYear ? d => d.per_year : d => d.box_office;

  return (
    <div className="App">
      <h1>Christmas Movies at the box office</h1>
      <p>
        Home Alone is the highest grossing Christmas movie of all time. But does
        the story change when you compare revenue per year? 🧐
      </p>
      <Button onClick={() => setPerYear(!perYear)}>
        {perYear ? "Show Total Box Office" : "Show Box Office Per Year"}
      </Button>
      <Svg width="800" height="600" showKevin={perYear}>
        {data && (
          <VerticalBarchart
            data={data}
            width={600}
            height={600}
            value={valueFunction}
          />
        )}
      </Svg>
    </div>
  );
}

export default App;
