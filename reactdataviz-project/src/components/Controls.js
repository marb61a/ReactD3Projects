import React, { useState, useEffect } from "react";

const ControlRow = ({
    data,
    toggleNames,
    picked,
    updateDataFilter,
    capitalize
}) => {
    function makePick(picked, newState) {
        updateDataFilter(picked, !newState);
    }

    return(
        <div className="row">
            <div className="col-md-12">
                {toggleNames.map((name) => (
                    <Toggle 
                        label={capitalize ? name.toUpperCase() : name}
                        name={name}
                        key={name}
                        value={picked === name}
                        onClick={makePick}
                    />
                ))}
            </div>
        </div>
    );
};

const Controls = ({ data, updateDataFilter }) => {
    const [ filteredBy, setFilteredBy ] = useState({
        year: "*",
        USstate: "*",
        jobTitle: "*"
    });
    const [ filter, setFilter ] = useState({
        year: () => true,
        USstate: () => true,
        jobTitle: () => true
    });

    function reportUpdateUpTheChain(){
        window.location.hash = [
            filteredBy.year,
            filteredBy.USstate,
            filteredBy.jobTitle,
        ].join("-");

        const filter = (d) => 
            filterFunctions.year(d) &&
            filterFunctions.USstate(d) && 
            filterFunctions.jobTitle(d);

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

    }

    const updateJobTitleFilter = (jobTitle, reset) => {
        let jobTitleFilter = (d) => d.clean_job_title === title;

        if(reset || !title){
            jobTitleFilter = () => true;
            jobTitle = "*";
        }

        setFilteredBy((filteredBy) => {
            return { ...filteredBy, jobTitle };
        });
        setFilter((filterFunctions) => {
            return { ...filterFunctions, jobTitle: jobTitleFilter };
        });

    }

    const updateUSstateFilter = (USstate, reset) => {
        let USstateFilter = (d) => d.USstate === USstate;

        if (reset || !USstate) {
            USstateFilter = () => true;
            USstate = "*";
        }

        setFilteredBy((filteredBy) => {
            return { ...filteredBy, USstate };
        });
        setFilter((filterFunctions) => {
            return { ...filterFunctions, USstate: USstateFilter };
        });

    }

    useEffect(() => {
        reportUpdateUpTheChain();
    }, [filteredBy, filterFunctions]);

    useEffect(() => {
        let [year, USstate, jobTitle] = window.location.hash.replace("#", "").split("-");

        if (year !== "*" && year) {
            updateYearFilter(Number(year));
        }
        if (USstate !== "*" && USstate) {
            updateUSstateFilter(USstate);
        }
        if (jobTitle !== "*" && jobTitle) {
            updateJobTitleFilter(jobTitle);
        }

    }, []);

    const years = new Set(data.map((d) => d.submit_date.getFullYear()));
    const jobTitles = new Set(data.map((d) => d.clean_job_title));
    const USstates = new Set(data.map((d) => d.USstate));

    return(
        <div>
            <ControlRow 
                data={data}
                toggleNames={Array.from(years.values())}
                picked={filteredBy.year}
                updateYearFilter={updateYearFilter}
            />
             <ControlRow
                data={data}
                toggleNames={Array.from(jobTitles.values())}
                picked={filteredBy.jobTitle}
                updateDataFilter={updateJobTitleFilter}
            />
            <ControlRow
                data={data}
                toggleNames={Array.from(USstates.values())}
                picked={filteredBy.USstate}
                updateDataFilter={updateUSstateFilter}
                capitalize="true"
            />
        </div>
    );

};

export default Controls;