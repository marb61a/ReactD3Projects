import React from "react";
import * as d3 from "d3";
import { hierarchy } from "d3-hierarchy";

const MondrianReactangle = ({ node}) => {
    const { x0, y0, x1, y1, children } = node;
    const width = x1 - x0;
    const height = y1 - y0;

    return(
        // React Fragement
        <>
            <rect 
                x={x0}
                y={y0}
                width={width}
                height={height}
                style={{
                    fill: node.data.color,
                    stroke: black,
                    strokeWidth: 5
                }}
            />
        </>
    );

};

const Mondrian = ({ x, y, width, height, data }) => {
    const treemap = d3
        .treemap()
        .size([width, height])
        .padding(5)
        .tile(d3.treemapBinary)

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