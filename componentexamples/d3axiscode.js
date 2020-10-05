import * as d3 from "d3";

const scale = d3
    .scaleLinear()
    .domain([0, 10])
    .range([0, 200])

// Will put axis on top bottom
const axis = d3.axisBottom(scale);

// Will put axis on top
// const axis = d3.axisTop(scale);
// Will put axis on left
// const axis = d3.axisLeft(scale);
// Will put axis on right
// const axis = d3.axisRight(scale);

d3.select("svg")
  .append("g")
  .attr("transform", "translate(10, 30)")
  .call(axis)
