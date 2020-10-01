class Alphabet extends Component {
    static letters = 'abcdefghijklmnopqrstuvwxyz'.split("");

    state = {alphabet: []};

    componentDidMount(){
        d3.interval(() => {
            const shuffledLetters = d3
                .shuffle(Alphabet.letters)
                .slice(0, Math.floor(Math.random() * 18))
                .sort();
            
            this.setState({
                alphabet: shuffledLetters
            });
        }, 1500);
    }

    render(){
        const { alphabet } = this.state;
        const letters = alphabet.map((d, i) => {
            <Letter d={d} i={i} key={i}/>
        });

        return(
            <g transform="translate(0, 200)">
                <ReactTransitionGroup component="g">
                    { letters }
                </ReactTransitionGroup>
            </g>
        );
    }
}
