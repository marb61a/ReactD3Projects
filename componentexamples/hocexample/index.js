import React from 'react';
import { render } from 'react-dom';

import Axis from './axis';
import Barchart from './Barchart';
import './style.css';

const styles = {
    fontFamily: 'sans-serif',
    textAlign: "center"
}

const App = () => (
    <svg width="800" height="400" id="svg">
        <Axis x={10} y={50}/>
    </svg>
);

render(
    <App />, document.getElementById("root")
);