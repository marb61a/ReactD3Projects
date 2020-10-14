import React from 'react';
import PreloaderImg from '../images/preloader-screenshot.png'

const Preloader = () => (
    <div className="App Container">
        <h1>The average H1B in tech pays $86,164/year</h1>
        <p className="lead">
            Since 2012 the US tech industry has sponsored 176,075 H1B work visas. 
            Most of them paid $60,660 to $111,668 per year (1 standard deviation). {" "}
            <span>
                The best city for an H1B is <b>Kirkland, WA </b>with an average individual salary
                <b>$39,465 above median household income</b>. Median household income is a good proxy 
                for cost of living in an area. 
            </span>
        </p>
        <img 
            src={PreloaderImg}
            style={{ width: "100%" }}
            alt="Loading Preview"
        />
        <h2 className="text-center">Loading Data ...</h2>
    </div>
)

export default Preloader;