import React, { Component } from 'react';
import './App.css';
import {NavLink, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import ListView from './components/ListView';
import DetailsView from './components/DetailsView';

//list View State stored in listView, Details page state stored in Details view
class App extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
      gameDataDirectory: "",
      favoriteTeam:"Blue Jays",
    };
  };
  //makes request for the "BatvFlip" on page load
  componentDidMount() { 
    axios.get('http://localhost:8080/games')
        .then((results) => {
            let games = results.data;
            for(let i = 0; i < games.length; i++) {
              if(games[i].homeTeam === this.state.favoriteTeam || games[i].awayTeam === this.state.favoriteTeam) {
                let jaysGame = games[i];
                games.splice(i, 1)
                games.splice(0, 0, jaysGame)
              };
            };
            this.setState({
                games: games,
            });
        })
        .catch((error) => {
            console.log(error);
        });
  };
  //makes post request with date data on form submit
  getGameData = (year, month, day) => {
    console.log(year, month, day);
    axios.post('http://localhost:8080/games', {year, month, day})
      .then((results) => {
        let games = results.data;
        for(let i = 0; i < games.length; i++) {
          if(games[i].homeTeam === this.state.favoriteTeam || games[i].awayTeam === this.state.favoriteTeam) {
            let jaysGame = games[i];
            games.splice(i, 1)
            games.splice(0, 0, jaysGame)
          };
        };
        this.setState({
            games: games,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //stores the url needed to get boxscore data in state for the game the user clicked
  getBoxScore = (gameDataDirectory) => {
    this.setState({
      gameDataDirectory: gameDataDirectory,
    });
  };
  //changes favorite team in state when the user changes it.
  changeTeam = (team) => {
    let favoriteTeam = team;
    this.setState({
      favoriteTeam: favoriteTeam,
    });
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                                                                       getBoxScore={this.getBoxScore}
                                                                       changeTeam={this.changeTeam}
                                                                       favoriteTeam={this.state.favoriteTeam}/>}}/>
            <Route path= "/:gameID" exact render={(props)=> {return <DetailsView match={props.match}
                                                                                 gameDataDirectory={this.state.gameDataDirectory}/>}}/>
        </Switch>
      </div>
    );
  }
}

export default App;
