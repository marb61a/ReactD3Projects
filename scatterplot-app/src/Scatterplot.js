import React from 'react';
import * as d3 from "d3";

import Axis from './Axis';

class Scatterplot extends React.PureComponent{
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
        const {x, y, data, width, height, datapoint } = this.props;
        const { xScale, yScale } = this.state;

        return(
            <g transform={`translate(${x}, ${y})`} >
                {
                    data.map(
                        ([x, y]) => datapoint({x: xScale(x), y: yScale(y)}
                    ))
                }
                <Axis x={0} y={0} scale={yScale} type="Left" label="Y"/>
                <Axis x={0} y={height} scale={xScale} type="Bottom" label="X" />
            </g>
        );
    }
}

export default Scatterplot;
