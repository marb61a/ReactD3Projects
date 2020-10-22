import React from 'react';
import { scaleLinear } from 'd3-scale';
import { 
    mean as d3mean, 
    extent as d3extent,
    deviation as d3deviation
} from 'd3-array';
import _, { sortBy } from "lodash";
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

class Description extends React.Component{
    allDataForYear(year, data = this.props.allData) {
        return data.filter((d) => d.submit_date.getFullYear() === year);
    }

    allDataForJobTitle(jobTitle, data = this.props.allData) {
        return data.filter((d) => d.clean_job_title === jobTitle);
    }

    allDataForUSstate(USstate, data = this.props.allData) {
        return data.filter((d) => d.USstate === USstate);
    }

    get yearsFragment(){
        const year = this.props.filteredBy.year;
        return year === "*" ? "" : `In ${year}`;
    }

    get USstateFragment(){
        const USstate = this.props.filteredBy.USstate;
        return USstate === "*" ? "" : USStatesMap[USstate.toUpperCase()];
    }

    get previousYearFragment(){
        const year = this.props.filteredBy.year;
        let fragment;

        if(year === "*"){
            fragment = "";
        } else if(year === 2012) {
            fragment = "";
        } else {
            const { USstate, jobTitle } = this.props.filteredBy;
            let lastYear = this.allDataForYear(year - 1);

            if(jobTitle !== "*"){
                lastYear = this.allDataForUSstate(jobTitle, lastYear);
            }

            if (USstate !== "*") {
                lastYear = this.allDataForUSstate(USstate, lastYear);
            }

            if(this.props.data.length / lastYear.length > 2){
                fragment = ", " +
                (this.props.data.length / lastYear.length).toFixed() +
                " times more than the year before";
            } else {
                const percent = (
                    (1 - lastYear.length / this.props.data.length) *100
                ).toFixed()

                fragment = ", " + Math.abs(percent) + "% " +
                (percent > 0 ? "more" : "less") + " than the year before";
            }
        }

        return fragment;
    }

    get jobTitleFragment(){
        const jobTitle = this.props.filteredBy.jobTitle;
        let fragment;

        if (jobTitle === "*") {
            fragment = "H1B work visas";
        } else {
            if (jobTitle === "other") {
                fragment = "H1B work visas";
            } else {
                fragment = `H1B work visas for software ${jobTitle}s`;
            }
        }

        return fragment;
    }

    get countyFragment(){
        const byCounty = _.groupBy(this.props.data);
        const medians = this.props.medianIncomesByCounty;

        let ordered = _.sortBy(
            _.keys(byCounty)
                .map((county) => byCounty[county])
                .filter((d) => d.length / this.props.data.length > 0.01),
            (items) => d3mean(items, (d) => d.base_salary) - medians[items[0].countyID][0].medianIncome
        );

        let best = ordered[ordered.length - 1];
        let countyMedian = medians[best[0].countyID][0].medianIncome;
        const byCity = _.groupBy(best, "city");

        ordered = _.sortBy(
            _.keys(byCity)
                .map((city) => byCity[city])
                .filter((d) => d.length / best.length > 0.01),
            (items) => d3mean(items, (d) => d.base_salary) - countyMedian
        );
        best = ordered[ordered.length - 1];

        return(
            <span>
                The best city {" "}
                {jobFragemnt.length }
            </span>
        )
    }

    get format(){
        return scaleLinear()
            .domain(d3extent(this.props.data, (d) => d.base_salary))
            .tickFormat();
    }

    render(){
        const format = this.format;
        const mean = d3mean(this.props.data, (d) => d.base_salary);
        const deviation = d3deviation(this.props.data, (d) => d.base_salary);

        return(
            <p className="lead">

            </p>
        );
    }
}

export { Description };
