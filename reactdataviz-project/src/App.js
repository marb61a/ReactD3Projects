import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import _ from 'lodash';

import './App.css';
import Preloader from './components/Preloader';
import CountyMap from './components/CountyMap';
import { loadAllData } from './DataHandling';

function App() {
  const [datasets, setDatasets] = useState({
    techSalaries: [],
    medianIncomes: [],
    countyNames: [],
    usTopoJson: null,
    USstateNames: null
  });

  async function loadData() {
    const datasets = await loadAllData();
    setDatasets(datasets);
  };

  // Needs to access local state so cannot be outside App function
  function countyValue(county, techSalariesMap){
    const medianHousehold = this.state.medianIncomes[county.id];
    const salaries = techSalariesMap[county.name];

    if(!medianHousehold || salaries){
      return null;
    }

    const median = d3
      .median(salaries, (d) => d.base_salary);
    
    return{
      countyID: county.id,
      value: median - medianHousehold.medianIncome
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  const filteredSalaries = techSalaries;
  const filteredSalariesMap = _.groupBy(filteredSalaries, "countyID")
  const countyValues = countyNames
    .map((county) => countyValue(county, filteredSalariesMap))
    .filter((d) => !_.isNull(d));
  
  let zoom = null;

  // Shows screenshot if techSalaries is not loaded
  if(techSalaries.length < 1){
    return <Preloader />
  } else {
    return (<div className="App">
        <h1>Loaded {techSalaries.length} salaries </h1>
        <svg width="1100" height="500">
          <CountyMap 
            usTopoJson={usTopoJson}
            USstateNames={USstateNames}
            x={0}
            y={0}
            width={500}
            height={500}
            zoom={zoom}
          />
        </svg>
      </div>
    )
  }

}

export default App;
