import { React, Component } from 'react';
import * as d3 from "d3";

class Axis extends Component{
    gRef = React.createRef();

    componentDidMount(){
        this.d3render();
    }

    componentDidUpdate(){
        this.d3render();
    }

    d3render(){

    }
    
}

export default Axis;