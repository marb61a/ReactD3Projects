import React, { useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import * as d3 from "d3";

const label = styled.text`
    fill: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    font-size: 14px;
    text-anchor: end;
    alignment-baseline: middle;
`;

const EndLabel = styled.text`
    fill: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    font-size: 14px;
    text-anchor: start;
    alignment-baseline: middle;
`;

const useTransition = (targetValue, name) => {
    const [renderValue, setRenderValue] = useState(targetValue);

    useEffect(() => {
        d3.selection()
            .transition(name)
            .duration(2000)
            .tween(name, () => {
                const interpolate = d3.interpolate(renderValue, targetValue);

                return t => setRenderValue(interpolate(t));
            })
    }, [targetValue]);

    return renderValue;
};

const Bar = ({ data, y, width, thickness}) => {
    const renderWidth = useTransition(width, `width-${data.name}`);
    const renderY = useTransition(y, `y-${data.name}`);

    return(
        <g transform={`translate(${0}, ${y})`}>
            <rect 
                x={10}
                y={0}
                width={width}
                height={thickness}
                fill="white"
            />
            <label y={thickness / 2}>
                {data.name}
            </label>
        </g>
    );
};

const Barchart = ({ data, x, y, barThickness, width}) => {
    const yScale = useMemo(
        () => d3
            .scaleBand()
            .domain(data.map(d => d.name))
            .paddingInner(0.2)
            .range([data.length * barWidth, 0]),
        [data.length, barThickness]
        
    );

    const color = useMemo(
        () => d3
            .scaleOrdinal()
            .domain([
                "AMD",
                "ARM",
                "Apple",
                "Fujitsu",
                "Hitachi",
                "Huawei",
                "IBM",
                "Intel",
                "Microsoft/AMD",
                "Motorola",
                "NEC",
                "Nvidia",
                "Oracle",
                "Samsung",
                "Sun/Oracle",
                "Toshiba",
                "Moore"
            ])
            .range(),
            []
    );
    
    // This will not be put into a useMemo because the
    // data changes each time
    const xScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, d => d.transistors)])
        .range([0, width]);
    
    const formatter = xScale.tickFormat();
    
    return(
        <g transform={`translate(${x}, ${y})`}>
            {data.map(d => {
                <Bar 
                    data={d}
                    key={d.name}
                    y={yScale(index)}
                    width={xScale(d.transistors)}
                    formatter={formatter}
                    thickness={yScale.bandwidth()}
                    color={color(d.designer) || "white"}
                />
            })}
        </g>
    )
};

export default Barchart;
