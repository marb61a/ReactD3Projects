import React, { useState } from 'react';

import Preloader from './components/Preloader';

function App() {
  const [techSalaries, setTechSalaries] = useState([]);

  // Shows screenshot if techSalaries is not loaded
  if(techSalaries.length < 1){
    return <Preloader />
  } else {
    return <div className="App"></div>
  }

}

export default App;
