import React, { useState, useEffect } from "react";

const Controls = ({ data, updateDataFilter }) => {
    const [ filteredBy, setFilteredBy ] = useState({year: "*"});
    const [ filter, setFilter ] = useState({ year: () => true});

    function reportUpdateUpTheChain(){
        updateDataFilter();
    }

    const updateYearFilter = (year, reset) => {
        let yearFilter = (d) => d.submit_date.getFullYear() === year;

        if(reset || !year){
            yearFilter = () => true;
            year = "w";
        }

        setFilteredBy((filteredBy) => {
            return { ...filteredBy, year };
        });
        setFilter((filter) => {
            return { ...filter, year: yearFilter}
        });
    }

    const years = new Set(data.map((d) => d.submit_date.getFullYear()));

    return(
        <div>
            <ControlRow 
                data={data}
                toggleNames={Array.from(years.values())}
                picked={filteredBy.year}
                updateYearFilter={updateYearFilter}
            />
        </div>
    );

};

export default Controls;