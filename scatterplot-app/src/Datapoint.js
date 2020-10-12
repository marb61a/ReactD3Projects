import React from 'react';
import styled from 'styled-components';

const Circle = styled.circle`
    fill: steelblue;
    fill-opacity: 0.8;
    stroke: steelblue;
    stroke-width: 1.5px
`;

class Datapoint extends React.Component{
    render(){
        const { x, y } = this.props;

        return(
            <Circle 
                cx={x}
                cy={y}
                r="3"
            />
        )
    }
}

export default Datapoint;
