import React from 'react';
import { scaleLinear } from 'd3-scale';
import { 
    mean as d3mean, 
    extent as d3extent,
    deviation as d3deviation
} from 'd3-array';
import _ from "lodash";
import S from "string";

import USStatesMap from '../USstatesMap';

export const Title = ({
    filteredSalaries, filteredBy
}) => {
    function yearsFragment(){
        const year = filteredBy.year;
        return year === "*" ? "" : `in ${year}`;
    }

    function USstateFragment(){
        const USstate = filteredBy.USstate;
        return USstate ===  "*" ? "" : USStatesMap[USstate.toUpperCase()];
    }

    function format(){
        return scaleLinear()
            .domain(d3extent(filteredSalaries, (d) => d.base_salary))
            .tickFormat();
    }

    function jobTitleFragment(){
        const { jobTitle, year } = filteredBy;
        let title = "";

        if(jobTitle === "*"){
            if(year === "*"){
                title = "The average H1B in tech pays";
            } else {
                title = "The average tech H1B paid";
            }
        } else {
            title = `Software ${jobTitle}s on a H1B`;

            if(year === "*"){
                title += " make";
            } else {
                title += " made";
            }
        }

        return title;
    }

    const mean = format()(d3mean(filteredSalaries, (d) => d.base_salary));
    let title;

    if(yearsFragment && USstateFragment){
        title =(
            <h2>
                In {USstateFragment}, {jobTitleFragment()}${mean}/year{" "}
                {yearsFragment()}
            </h2>
        );
    } else {
        title = (
            <h2>
                {jobTitleFragment()} ${mean}/year
                {USstateFragment() ? `in ${USstateFragment()}` : ""}
                { yearsFragment() }
            </h2>
        );
    }

    return title;
};
