class Dataviz extends Component {
    render(){
        return(
            <g transform={translate}>
                <Histogram 
                    data={this.props.data}
                    value={d => d.base_salary}
                    x={0}
                    y={0}
                    width={400}
                    height={200}
                    title="All"
                />
                <Histogram 
                    data={engineerData}
                    value={d => d.base_salary}
                    x={450}
                    y={0}
                    width={400}
                    height={200}
                    title="Engineer"
                />
                <Histogram 
                    data={programmerData}
                    value={d => d.base_salary}
                    x={0}
                    y={220}
                    width={400}
                    height={200}
                    title="Programmer"
                />
                <Histogram 
                    data={developerData}
                    value={d => d.base_salary}
                    x={450}
                    y={220}
                    width={400}
                    height={200}
                    title="Developer"
                />
            </g>
        )
    }
}
