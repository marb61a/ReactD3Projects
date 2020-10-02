import React from 'react';
import { render } from 'react-dom';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const styles = {
    fontFamily: 'sans-serif',
    textAlign: "center"
}

const data = [
    { quarter: 1, earnings: 13000},
    { quarter: 1, earnings: 16250},
    { quarter: 1, earnings: 14500},
    { quarter: 1, earnings: 19000}
];

const App = () => (
    <div style={styles}>
        <h1>Recharts Demo</h1>
        <BarChart width={500} height={300} data={data}>
            <XAxis dataKey="quarter" />
            <YAxis dataKey="earnings" />
            <Bar dataKey="earnings" />
        </BarChart>
    </div>
);

render(
    <App />, document.getElementById("root")
);
