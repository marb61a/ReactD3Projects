import React, { useState, useEffect } from "react";

const ControlRow = ({
    data,
    toggleNames,
    picked,
    updateDataFilter,
}) => {
    function makePick(picked, newState) {
        updateDataFilter(picked, !newState);
    }

    return(
        <div className="row">
            <div className="col-md-12">
                {toggleNames.map((name) => (
                    <Toggle 
                    
                    />
                ))}
            </div>
        </div>
    );
};

const Controls = ({ data, updateDataFilter }) => {
    const [ filteredBy, setFilteredBy ] = useState({year: "*"});
    const [ filter, setFilter ] = useState({ year: () => true});

    function reportUpdateUpTheChain(){
        window.location.hash = [this.state.year || "*"].join("-");

        const filter = (d) => filterFunctions.year(d);
        updateDataFilter(filter, filteredBy);
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

        reportUpdateUpTheChain();
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