import React from 'react';
import * as d3 from "d3";

import Axis from './Axis';

class Scatterplot extends React.Component{
    state = {
        xScale : d3
            .scaleLinear()
            .domain([0, 1])
            .range([0, this.props.width]),
        yScale : d3
            .scaleLinear()
            .domain([0, 1])
            .range([this.props.height, 0])
    };

    static getDerivedStateFromProps(props, state){
        let { xScale, yScale } = state;

        xScale.range([0, props.width]);
        yScale.range([0, props.height]);

        return { ...state, xScale, yScale };
    }

    render(){
        const {x, y, data, height} = this.props;
        const { xScale, yScale } = this.state;

        return(
            <g transform={`translate(${x}, ${y})`} >
                {
                    data.map(
                        ([x, y]) => (<circle cx={xScale(x)} cy={yScale(y)} r="3" />
                    ))
                }
                <Axis x={0} y={0} scale={yScale} type="Left" label="Y"/>
                <Axis x={0} y={height} scale={xScale} type="Bottom" label="X" />
            </g>
        );
    }
}

export default Scatterplot;
