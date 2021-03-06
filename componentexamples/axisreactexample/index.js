import React from 'react';
import { render } from 'react-dom';
import Axis from './axis';

const styles = {
    fontFamily: 'sans-serif',
    textAlign: "center"
}

const App = () => (
    <svg width="800" height="400" id="svg">
        <Axis x={20} y={50}/>
        {/* <Axis y={10}/> */}
    </svg>
);

render(
    <App />, document.getElementById("root")
);
