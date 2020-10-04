import React from 'react';
import { render } from 'react-dom';
import { ResponsiveBar } from '@nivo/bar';

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
        <h1>Nivo Basic Demo</h1>
        <div style={{ height: "400px" }}>
            <ResponsiveBar data={data} keys={["earnings"]} indexBy="quarter"/>
        </div>
    </div>
);

render(
    <App />, document.getElementById("root")
);
