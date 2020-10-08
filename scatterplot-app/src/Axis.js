import React from 'react';
import * as d3 from "d3";
import styled from "styled-components";

const Text = styled.text`
  fill: black;
  font-family: sans-serif;
  font-size: 10px;
`;

class Axis extends React.Component{
    constructor(){
        super();
        this.gRef = React.createRef();
    }

    componentDidUpdate(){
        this.d3Render();
    }

    componentDidMount(){
        this.d3Render();
    }

    d3Render(){
        const { type } = this.props;
        d3.select(this.gRef.current).call(d3[`axis${type}`](this.props.scale));
    }

    getLabelPos(){
        const { type, scale } = this.props;
    }

    render(){
        const { x, y, label } = this.props;

        return(
            <g>
                <text>
                    { label }
                </text>
            </g>
        )
    }

}

export default Axis;
