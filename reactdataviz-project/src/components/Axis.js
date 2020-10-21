import React from 'react';
import { useD3 } from "d3Blackbox";
import * as d3 from 'd3';

const Axis = ({ x, y, scale, type="bottom" }) => {
    const gRef = useD3((anchor) => {
        const axis = d3[`axis${type}`](scale);

        d3.select(anchor).call(axis);
    });

    return(
        <g transform={`translate(${x}, ${y})`} ref={gRef} />
    );

};

export default Axis;