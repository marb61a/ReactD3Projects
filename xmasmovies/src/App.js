import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";
import styled from "styled-components";

import "./styles.css";

function App() {
  const [ data, setData ] = useState(null);

  return (
    <div className="App">
      <h1>Christmas Movies at the box office</h1>
    </div>
  );
}

export default App;
