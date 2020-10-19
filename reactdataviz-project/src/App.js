import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import _ from 'lodash';

import './App.css';
import Preloader from './components/Preloader';
import CountyMap from './components/CountyMap';
import { loadAllData } from './DataHandling';

function App() {
  const [techSalaries, setTechSalaries] = useState([]);
  const [medianIncomes, setMedianIncomes] = useState([]);
  const [countyNames, setCountyNames] = useState([]);

  async function loadData() {
    const data = await loadAllData();
    const { techSalaries, medianIncomes, countyNames } = data;

      setTechSalaries(techSalaries);
      setMedianIncomes(medianIncomes);
      setCountyNames(countyNames);

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
    .map((county) => this.countyValue(county, filteredSalariesMap))
    .filter((d) => !_.isNull(d));

  // Shows screenshot if techSalaries is not loaded
  if(techSalaries.length < 1){
    return <Preloader />
  } else {
    return (<div className="App">
        <h1>Loaded {techSalaries.length} salaries </h1>
      </div>
    )
  }

}

export default App;
