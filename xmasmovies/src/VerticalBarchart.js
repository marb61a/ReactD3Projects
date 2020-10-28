import React from "react";
import * as d3 from "d3";
import styled from "styled-components";

const Bar = styled.rect`
    fill: green;
    transition: width 500 ms;
`;

const Label = styled.text`
    fill: white;
    font-size: 11px;
    alignment-baseline: central;
`;

const VerticalBarchart = ({data, width, height, value}) => {
    const yScale = d3
        .scaleBand()
        .paddingInner(0.1)
        .domain(data.map(d => d.movie))
        .range([0, height])
    
    const widthScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, value)])
        .range([0, width]);

    return(
        <g>
            {data.map(d => (
                <React.Fragment>
                    <Bar 
                        x={0}
                        y={yScale(d.movie)}
                        height={yScale.bandwidth()}
                        width={widthScale(value(d))}
                    />
                </React.Fragment>
            ))}
        </g>
    );

}

export default VerticalBarchart;
