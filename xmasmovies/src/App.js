import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";
import styled from "styled-components";

import "./styles.css";

function App() {
  const [ data, setData ] = useState(null);

  useEffect(() => {
    d3.tsv("./public/data.tsv", d => {
      const year = Number(d.movie.match(/\((\d+)\)/)[1]);

      return{
        movie: d.movie.replace(/\(\d+\)/, ""),
        year: year,
        per_year: Number(d.box_office) / (2018 - year),
        box_office: Number(d.box_office)
      }
    }, [!data]);
  });

  return (
    <div className="App">
      <h1>Christmas Movies at the box office</h1>
      <p>
        Home Alone is the highest grossing Christmas movie of all time. But does
        the story change when you compare revenue per year? 🧐
      </p>
      
    </div>
  );
}

export default App;
