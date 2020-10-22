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
            .domain(d3extent(data, (d) => d.base_salary))
            .tickFormat()
    }

    function jobTitleFormat(){
        const { jobTitle, year } = filteredBy;
        let title = "";

        if(jobTitle === "*"){
            if(year === "*"){

            } else {
                
            }
        } else {

        }

        return title;
    }

}
