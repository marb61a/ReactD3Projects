import React from "react";
import styled from "styled-components";
import * as d3 from "d3";

const Bar = () => {

}

const Barchart = ({ data, x, y, barWidth}) => {
    const yScale = d3
        .scaleBand()
        .domain(data.map(d => d.name))
        .paddingInner(0.2)
        .range([data.length * barWidth, 0]);
    
    const xScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, d => d.transistors)])
        .range([0, width]);
    
    return(
        <g>
            <Bar />
        </g>
    )
};

export default Barchart;
