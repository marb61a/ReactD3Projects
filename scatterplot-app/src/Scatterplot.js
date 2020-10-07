import React from 'react';
import * as d3 from "d3";

class Scatterplot extends React.Component{
    xScale = d3
        .scaleLinear()
        .domain([0, 1])
        .range([0, 300])
    yScale = d3
        .scaleLinear()
        .domain([0, 1])
        .range([0, 200])

    render(){
        const {x, y, data} = this.props;

        return(
            <g transform={`translate(${x}, ${y})`} >
                {
                    data.map(([x, y]) => <circle cx={this.xScale(x)} cy={this.yScale(y)} r="3" />)
                }
            </g>
        );
    }
}

export default Scatterplot;
