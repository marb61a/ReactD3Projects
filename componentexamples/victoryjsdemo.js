import React from 'react';
import { render } from 'react-dom';
import { VictoryBar, VictoryChart } from 'victory';

const styles = {
    fontFamily: 'sans-serif',
    textAlign: "center"
}

const data = [
    { quarter: 1, earnings: 13000},
    { quarter: 2, earnings: 16250},
    { quarter: 3, earnings: 14500},
    { quarter: 4, earnings: 19000}
];

const App = () => (
    <div style={styles}>
        <h1>Victory Demo</h1>
        <VictoryChart>
            <VictoryBar data={data} x="quarter" y="earnings"/>
        </VictoryChart>
    </div>
);

render(
    <App />, document.getElementById("root")
);
