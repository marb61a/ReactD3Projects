import React from 'react';
import { render } from 'react-dom';
import { Bar } from '@vx/shape';
import { scaleBand, scaleLinear } from "@vx/scale";
import { max, extent } from "d3-array";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

const data = [
    { quarter: 1, earnings: 13000},
    { quarter: 2, earnings: 16250},
    { quarter: 3, earnings: 14500},
    { quarter: 4, earnings: 19000}
];

const App = ({ width = 400, height = 400 }) => {
    const xMax = width;
    const yMax = height;

    const x = d => d.quarter;
    const y = d => d.earnings;

    // Scales
    const xScale = scaleBand({

    });

    const yScale = scaleLinear({

    });

    return(
        <div style={styles}>
            <h1>VX Demo</h1>
            <svg width={width} height={height}>
                {
                    data.map((di) => {
                        
                    })
                }
            </svg>
        </div>
    );
};

render(
    <App />, document.getElementById("root")
);

