import React from 'react';
import ScoreBoard from './ScoreBoard';
import BoxScore from './BoxScore';
import axios from 'axios';

//state for details page stored here
class DetailsView extends React.Component {
    constructor () {
        super();
        this.state = {
            boxScore: {},
            loading: false,
            home: true,
        }
    };
    //makes the request for boxscore data
    componentWillMount(props) {
        if (this.props.gameDataDirectory === undefined) {
            console.log('stats unavailable');
        }
        else {
            this.setState({
                loading: true,
            });
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
            });
        };
    };
    //toggles the view of the boxscore based on which team you click
    toggleTeams = (boolean) => {
        let home = boolean;
        this.setState({
            home: home,
        });
    };
    render() {
        if (this.state.loading) {
            console.log('loading')
            return <h2 className="conditionalStyle">Loading...</h2>;
          }
        else if (this.props.gameDataDirectory === undefined) {
            return <h2 className="conditionalStyle">Stats unavailable</h2>;
        }
        return (
            <div className="container">
                <div className="row">
                    <ScoreBoard boxScore={this.state.boxScore}/>
                    <BoxScore boxScore={this.state.boxScore}
                              home={this.state.home}
                              toggleTeams={this.toggleTeams}/>
                </div>
            </div>
        );
    }
}

export default DetailsView;