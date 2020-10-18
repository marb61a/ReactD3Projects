import * as d3 from 'd3';
import _ from 'lodash';

const cleanIncome = (d) => ({
    countyName: d["Name"],
    USstate: d["State"],
    medianIncome: Number(d["Median Household Income"]),
    lowerBound: Number(d["90% CI Lower Bound"]),
    upperBound: Number(d["90% CI Upper Bound"])
});

const dateParse = d3.timeParse("%m/%d/%Y");

const cleanSalary = (d) => {
    if(!d["base salary"] || Number(d["base salary"]) > 300000){
        return null;
    }

    return{
        employer: d.employer,

    }
}

const cleanUSStateName = (d) => ({
    code: d.code,
    id: Number(d.id),
    name: d.name
});
