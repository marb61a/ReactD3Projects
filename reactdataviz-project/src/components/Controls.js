import React, { useState, useEffect } from "react";

const Controls = ({}) => {
    const [ yearFilter, setYearFilter ] = useState(() => true);
    const [ year, setYear ] = us("*");

    const updateFilter = (year, reset) => {
        let filter = (d) => d.submit_date.getFullYear() === year;

        if(reset || !year){
            filter = () => true;
            year = "w";
        }
    }

    return(
        <div>
            
        </div>
    );

};

export default Controls;