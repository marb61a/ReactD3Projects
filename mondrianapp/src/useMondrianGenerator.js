import { useMemo } from "react";
import * as d3 from "d3";

// Picks a random color for a square using weighted probability
const createColor = ({ redRatio, blueRatio, yellowRatio, blackRatio }) => {
    const probabilitySpace = [

    ];

    return d3.shuffle(probabilitySpace)[0];
};

function useMondrianGenerator(){
    let mondrian = useMemo(() => {

    });

    return mondrian;
}

export default useMondrianGenerator;