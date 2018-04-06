import React from 'react';
import ScoreBoard from './ScoreBoard';
import BoxScore from './BoxScore';
import axios from 'axios';

class DetailsView extends React.Component {
    constructor () {
        super();
        this.state = {
            boxScore: {},
            loading: false,
        }
    };
    componentWillMount(props) {
        this.setState({
            loading: true,
        })
        let boxScore;
        let gameDataDirectory = this.props.gameDataDirectory;
        axios.post('http://localhost:8080/boxscore', {gameDataDirectory})
        .then((results) => {
            boxScore = results.data;
            this.setState({
                boxScore: boxScore,
                loading: false,
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }
    render() {
        if (this.state.loading) {
            console.log('loading')
            return <h2>Loading...</h2>;
          }
        return (
            <div className="container">
                <div className="row">
            
                    <ScoreBoard boxScore={this.state.boxScore}
                                />

                    <BoxScore/>
                </div>
            </div>
        );
    }
}

export default DetailsView;