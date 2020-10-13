import { React, useRef, useEffect }from 'react';
import * as d3 from "d3";
// import D3Blackbox from './D3blackbox';

// const Axis = D3Blackbox(function() {
//     const scale = d3
//         .scaleLinear()
//         .domain([0, 10])
//         .range([0, 200]);
    
//     const axis = d3.axisBottom(scale);

//     d3.select(this.anchor.current).call(axis);
// });

// Will replace the commented function
const Axis = ({ x, y }) => {
    const gRef = useRef();

    useEffect(() => {
        const scale = d3
            .scaleLinear()
            .domain([0, 10])
            .range([0, 200]);
        
        const axis = d3.axisBottom(scale);

        d3.select(gRef.current).call(axis);
    }, []);

    return(
        <g transform={`translate(${x}, ${y})`} />
    );

};

export default Axis;
