import React from "react";
import * as d3 from "d3";
import { hierarchy } from "d3-hierarchy";

const Mondrian = ({ x, y, width, height }) => {
    return(
        <g transform={`translate(${x}, ${y})`}>
            <rect 
                width={width}
                height={height}
            />
        </g>
    );
    
};

export default Mondrian;