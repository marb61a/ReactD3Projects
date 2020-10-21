import React from 'react';

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

}
