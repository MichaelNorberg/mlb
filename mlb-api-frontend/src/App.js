import React, { Component } from 'react';
import './App.css';
import {NavLink, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import ListView from './components/ListView';
import DetailsView from './components/DetailsView';

class App extends Component {
  constructor() {
    super();
    this.state = {
      games: [/* {homeTeam: '', awayTeam: '', status: '', homeScore: '', awayScore: ''} */],
      boxScore: [],
      gameDataDirectory: "",
    };
  };
  componentDidMount() { 
    axios.get('http://localhost:8080/games')
        .then((results) => {
            let games = results.data;
            this.setState({
                games: games,
            });
            console.log(this.state.games)
        })
        .catch((error) => {
            console.log(error);
        });
  };
  getGameData = (year, month, day) => {
    console.log(year, month, day);
    axios.post('http://localhost:8080/games', {year, month, day})
      .then((results) => {
        if (!Array.isArray(results.data)) {
          let games = [];
          games.push(results.data)
          this.setState({
            games: games,
          });
          console.log(this.state.games)
        }
        else {
          let games = results.data;
          this.setState({
              games: games,
          });
          console.log(this.state.games);
        };
      })
      .catch((error) => {
        console.log(error);
      });
  };
  getBoxScore = (gameDataDirectory) => {
    console.log('you hit get box score');
    console.log(gameDataDirectory);
    this.setState({
      gameDataDirectory: gameDataDirectory,
    })
    /* axios.post('http://localhost:8080/boxscore', {gameDataDirectory})
      .then((results) => {
        let boxScore = results.data;
        this.setState({
            boxScore: boxScore,
            boxScoreReady: true,
        });
        console.log(this.state.boxScore.lineScore[0].inning);
      })
      .catch((error) => {
        console.log(error);
      }); */
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" id="navHov" exact to="/">MLB SCORES</NavLink>
          <button className="navbar-toggler" 
                  type="button" 
                  data-toggle="collapse" 
                  data-target="#navbarNavAltMarkup" 
                  aria-controls="navbarNavAltMarkup" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-item nav-link" id="navHov" exact to="/">Scores</NavLink>
            </div>
          </div>
        </nav>
        <Switch>
            <Route path= "/" exact render={(props)=> {return <ListView match={props.match}
                                                                       games={this.state.games}
                                                                       getGameData={this.getGameData}
                                                                       getBoxScore={this.getBoxScore}/>}}/>
            <Route path= "/:gameID" exact render={(props)=> {return <DetailsView match={props.match}
                                                                                 boxScore={this.state.boxScore}
                                                                                 gameDataDirectory={this.state.gameDataDirectory}/>}}/>
        </Switch>
      </div>
    );
  }
}

export default App;