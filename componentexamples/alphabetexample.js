class Alphabet extends Component {
    static letters = 'abcdefghijklmnopqrstuvwxyz'.split("");

    state = {alphabet: []};

    componentDidMount(){
        d3.interval(() => {

        }, 1500);
    }

    render(){
        const { alphabet } = this.state;
        const letters = alphabet.map((d, i) => {

        });

        return(
            <g>
                
            </g>
        );
    }
}
