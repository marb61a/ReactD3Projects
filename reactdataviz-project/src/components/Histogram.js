import React from 'react';
import * as d3 from 'd3';

const HistogramBar = ({
    percent, x, y, width, height
}) => {
    let translate = `translate(${x}, ${y})`
    let label = percent.toFixed(0) + "%";

    if(percent < 1){
        label = percent.toFixed(2) + "%";
    }

    if(width < 20){
        label = label.replace("%", "");
    }

    if(width < 10){
        label = "";
    }
    
}

const Histogram = ({
    bins, width, height, x, y, data, axisMargin, bottomMargin, value
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
    const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(bars, (d) => d.x1)])
        .range([height - y - bottomMargin, 0]);

    return(
        <g className="histogram" transform={`translate(${x}, ${y})`}>
            <g className="bars">
                {bars.map(
                    (bar) => (
                    <HistogramBar 
                        percent={(bar.length / data.length)} 
                        x={axisMargin}
                        y={yScale(bar.x1)}
                        width={widthScale(bar.length)}
                        height={yScale(bar.x0) - yScale(bar.x1)}
                        key={`histogram-bar-${bar.x0}`}
                    />
                ))}
            </g>
        </g>
    )
}

export default Histogram;
