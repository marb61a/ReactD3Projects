import { useMemo } from "react";
import * as d3 from "d3";

// Picks a random color for a square using weighted probability
const createColor = ({ redRatio, blueRatio, yellowRatio, blackRatio }) => {
    const probabilitySpace = [
        ...new Array(redRatio * 10).fill("red"),
        ...new Array(blueRatio * 10).fill("blue"),
        ...new Array(yellowRatio * 10).fill("yellow"),
        ...new Array(blackRatio * 10).fill("black"),
        ...new Array(
            redRatio * 10 + blueRatio * 10 + yellowRatio * 10 + blackRatio * 10
        ).fill("#fffaf1")
    ];

    return d3.shuffle(probabilitySpace)[0];
};

function useMondrianGenerator(){
    let mondrian = useMemo(() => {

    });

    return mondrian;
}

export default useMondrianGenerator;