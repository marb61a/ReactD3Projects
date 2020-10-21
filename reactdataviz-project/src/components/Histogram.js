import React from 'react';
import * as d3 from 'd3';

const Histogram = ({
    width, height, x, y, data, axisMargin, bottomMargin, value
}) => {
    const histogram = d3
        .histogram()
        .thresholds(bins)
        .bins(value);
    
    const bars = histogram(data);
    const counts = bars.map((d) => d.length);

    const widthScale = d3
        .scaleLinear()
        .domain([d3.min(counts), d3.max(counts)])
        .range([0, width - axisMargin]);
    const yScale = d3.scaleLinear();

}

export default Histogram;
