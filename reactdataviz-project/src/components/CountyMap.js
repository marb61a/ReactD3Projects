import React from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import _ from 'lodash';
 
const CountyMap = ({
    usTopoJson,
    USstateNames,
    x,
    y,
    width,
    height,
    zomm
}) => {
    const projection = d3
        .geoAlbersUsa()
        .scale(1280)
        .translate([width / 2, height / 2])
        .scale(width * 1.3);
    const geoPath = d3.geoPath().projection(projection);
    const quantize = d3.scaleQuantize().range(d3.range(9));

    if(zoom && usTopoJson){
        const us = usTopoJson;
        const USstatePaths = topojson.feature(us, us.objects.states).features;
        const id = _.find(USstateNames, { code: zoom}).id;

        projection.scale(width * 4.5);
        const centroid = geoPath.centroid(_.find(USstatePaths, { id: id}));
        const translate = projection.translate();
        
    }

    if(!usTopoJson){
        return null;
    } else {
        return(
            <div></div>
        )
    }
}

export default CountyMap
