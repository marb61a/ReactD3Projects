import React from 'react';
import { scaleLinear } from 'd3-scale';
import { mean as d3mean, extent as d3extent} from 'd3-array';

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

    return function format(){
        return scaleLinear
            .domain(d3extent(filteredSalaries, (d) => d.base_salary))
            .tickFormat()
    }

    function jobTitleFormat(){
        const { jobTitle, year } = filteredBy;
        let title = "";

        if(jobTitle === "*"){
            if(year === "*"){
                title = "The average H1B pays"
            } else {
                title = "The average tech H1B paid"
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

    const mean = this.format(d3mean(filteredSalaries, (d) => d.base_salary));
    let title;

    if(this.yearsFragment && this. USstateFragment){
        title =(
            <h2>
                In {this.USstateFragment}, 

            </h2>
        );
    } else {

    }

    return title;
}
