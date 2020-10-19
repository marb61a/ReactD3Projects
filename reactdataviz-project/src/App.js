import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import _ from 'lodash';

import './App.css';
import Preloader from './components/Preloader';
import { loadAllData } from './DataHandling';

function App() {
  const [techSalaries, setTechSalaries] = useState([]);
  const [medianIncomes, setMedianIncomes] = useState([]);
  const [countyNames, setCountyNames] = useState([]);

  async function loadData(data) {
    const { techSalaries, medianIncomes, countyNames } = data;

    setTechSalaries(techSalaries)
    setMedianIncomes(medianIncomes)
    setCountyNames(countyNames)
  };

  useEffect(() => {
    loadData();
  }, []);

  // Shows screenshot if techSalaries is not loaded
  if(techSalaries.length < 1){
    return <Preloader />
  } else {
    return <div className="App">
      <h1>Loaded {techSalaries.length} salaries </h1>
    </div>
  }

}

export default App;
