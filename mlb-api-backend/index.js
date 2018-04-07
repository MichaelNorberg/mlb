const express = require('express');
const app = express();
const cors = require('cors');
const request = require('request');
const bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
 
app.use(bodyParser.json());
//constructor for formating list page data
function Game(homeTeam, 
              awayTeam, 
              status, 
              homeScore, 
              awayScore, 
              gameDataDirectory) {
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.status = status;
    this.homeScore = homeScore;
    this.awayScore = awayScore;
    this.gameDataDirectory = gameDataDirectory;
};
//constructor for formatting details page data
function BoxScore(homeTeam, 
                  awayTeam,  
                  homeTeamRuns, 
                  homeTeamErrors, 
                  hometeamHits, 
                  awayTeamRuns, 
                  awayTeamErrors, 
                  awayteamHits,
                  lineScore, 
                  homeBatters, 
                  awayBatters) {
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.homeTeamRuns = homeTeamRuns;
    this.homeTeamErrors = homeTeamErrors;
    this.homeTeamHits = hometeamHits;
    this.awayTeamRuns = awayTeamRuns;
    this.awayTeamErrors = awayTeamErrors;
    this.awayTeamHits = awayteamHits;
    this.lineScore = lineScore;
    this.homeBatters = homeBatters;
    this.awayBatters = awayBatters;
};
//end point for request on list page first load. Will always return the date of the "BAT FLIP"
app.get('/games', (req, res) => {
    request('http://gd2.mlb.com/components/game/mlb/year_2015/month_10/day_14/master_scoreboard.json', function (error, response, body) {
        if (error) {
            console.log('ERROR! Couldnt access the API because of ' + error);
        } 
        else {
            body = JSON.parse(body);
            let gameData = body.data.games.game;
            if (gameData === undefined) {
                res.send('No Games Today');
                console.log('No Games Today');
            }
            else {
                let games;
                if (!Array.isArray(gameData)) {
                    gameData = Array.of(gameData)
                    let previewGames = gameData.filter(gameData => gameData.status.status === "Preview")
                                               .map((game, i) => {
                                                    return new Game(game.home_team_name, 
                                                                    game.away_team_name, 
                                                                    game.status.status,);
                    });
                    let postponedGames = gameData.filter(gameData => gameData.status.status === "Postponed")
                                                 .map((game, i) => {
                                                    return new Game(game.home_team_name, 
                                                                    game.away_team_name, 
                                                                    game.status.status,);
                    });
                    let cancelledGames = gameData.filter(gameData => gameData.status.status === "Cancelled")
                                                 .map((game, i) => {
                                                    return new Game(game.home_team_name, 
                                                                    game.away_team_name, 
                                                                    game.status.status,);
                    });
                    let finishedGames = gameData.filter(gameData => gameData.status.status != "Cancelled" && gameData.status.status != "Postponed" && gameData.status.status != "Preview")
                                                .map((game, i) => {
                                                    return new Game(game.home_team_name, 
                                                                    game.away_team_name, 
                                                                    game.status.status, 
                                                                    game.linescore.r.home, 
                                                                    game.linescore.r.away,
                                                                    game.game_data_directory);
                    });
                    games = finishedGames.concat(postponedGames, cancelledGames, previewGames);
                    console.log(games);
                }
                else {
                    let previewGames = gameData.filter(gameData => gameData.status.status === "Preview")
                                               .map((game, i) => {
                                                    return new Game(game.home_team_name, 
                                                                    game.away_team_name, 
                                                                    game.status.status,);
                    });
                    let postponedGames = gameData.filter(gameData => gameData.status.status === "Postponed")
                                                 .map((game, i) => {
                                                    return new Game(game.home_team_name, 
                                                                    game.away_team_name, 
                                                                    game.status.status,);
                    });
                    let cancelledGames = gameData.filter(gameData => gameData.status.status === "Cancelled")
                                                 .map((game, i) => {
                                                    return new Game(game.home_team_name, 
                                                                    game.away_team_name, 
                                                                    game.status.status,);
                    });
                    let finishedGames = gameData.filter(gameData => gameData.status.status != "Cancelled" && gameData.status.status != "Postponed" && gameData.status.status != "Preview")
                                                .map((game, i) => {
                                                    return new Game(game.home_team_name, 
                                                                    game.away_team_name, 
                                                                    game.status.status, 
                                                                    game.linescore.r.home, 
                                                                    game.linescore.r.away,
                                                                    game.game_data_directory);
                    });
                    games = finishedGames.concat(postponedGames, cancelledGames, previewGames);
                    console.log(games);
                };
                res.json(games);
            }; 
        };
    });
});
//end point for when a user selects a custom date and submits it. Returns data for list page.
app.post('/games', (req, res) => {
    let year = req.body.year;
    let month = req.body.month;
    let day = req.body.day;
    console.log(year, month, day);
    let url = 'http://gd2.mlb.com/components/game/mlb/year_' + year + '/month_' + month + '/day_' + day + '/master_scoreboard.json';
    request(url, function (error, response, body) {
        if (error) {
            console.log('ERROR! Couldnt access the API because of ' + error);
        } 
        else {
            body = JSON.parse(body);
            let gameData = body.data.games.game;
            if (gameData === undefined) {
                res.send('No Games Today');
                console.log('No Games Today');
            }
            else {
                let games;
                if (!Array.isArray(gameData)) {
                    gameData = Array.of(gameData)
                    let previewGames = gameData.filter(gameData => gameData.status.status === "Preview")
                                               .map((game, i) => {
                                                    return new Game(game.home_team_name, 
                                                                    game.away_team_name, 
                                                                    game.status.status,);
                    });
                    let postponedGames = gameData.filter(gameData => gameData.status.status === "Postponed")
                                                 .map((game, i) => {
                                                    return new Game(game.home_team_name, 
                                                                    game.away_team_name, 
                                                                    game.status.status,);
                    });
                    let cancelledGames = gameData.filter(gameData => gameData.status.status === "Cancelled")
                                                 .map((game, i) => {
                                                    return new Game(game.home_team_name, 
                                                                    game.away_team_name, 
                                                                    game.status.status,);
                    });
                    let finishedGames = gameData.filter(gameData => gameData.status.status != "Cancelled" && gameData.status.status != "Postponed" && gameData.status.status != "Preview")
                                                .map((game, i) => {
                                                    return new Game(game.home_team_name, 
                                                                    game.away_team_name, 
                                                                    game.status.status, 
                                                                    game.linescore.r.home, 
                                                                    game.linescore.r.away,
                                                                    game.game_data_directory);
                    });
                    games = finishedGames.concat(postponedGames, cancelledGames, previewGames);
                    console.log(games);
                }
                else {
                    let previewGames = gameData.filter(gameData => gameData.status.status === "Preview")
                                               .map((game, i) => {
                                                    return new Game(game.home_team_name, 
                                                                    game.away_team_name, 
                                                                    game.status.status,);
                    });
                    let postponedGames = gameData.filter(gameData => gameData.status.status === "Postponed")
                                                 .map((game, i) => {
                                                    return new Game(game.home_team_name, 
                                                                    game.away_team_name, 
                                                                    game.status.status,);
                    });
                    let cancelledGames = gameData.filter(gameData => gameData.status.status === "Cancelled")
                                                 .map((game, i) => {
                                                    return new Game(game.home_team_name, 
                                                                    game.away_team_name, 
                                                                    game.status.status,);
                    });
                    let finishedGames = gameData.filter(gameData => gameData.status.status != "Cancelled" && gameData.status.status != "Postponed" && gameData.status.status != "Preview")
                                                .map((game, i) => {
                                                    return new Game(game.home_team_name, 
                                                                    game.away_team_name, 
                                                                    game.status.status, 
                                                                    game.linescore.r.home, 
                                                                    game.linescore.r.away,
                                                                    game.game_data_directory);
                    });
                    games = finishedGames.concat(postponedGames, cancelledGames, previewGames);
                    console.log(games);
                };
                res.json(games);
            }; 
        };
    });
});
//end point for when a user clicks on a game. Returns Details page data with scoreboard and boxscore.
app.post('/boxscore', (req,res) => {
    let gameDataDirectory = req.body.gameDataDirectory;
    console.log(gameDataDirectory);
    let url = 'http://gd2.mlb.com' + gameDataDirectory + '/boxscore.json';
    let boxScore;
    request(url, function (error, response, body) {
        if (error) {
            console.log('ERROR! Couldnt access the API because of ' + error);
        }
        else {
            body = JSON.parse(body);
            let boxScoreData = body.data.boxscore;
            console.log(boxScoreData);
            boxScore = new BoxScore(boxScoreData.home_sname,
                                    boxScoreData.away_fname,
                                    boxScoreData.linescore.home_team_runs,
                                    boxScoreData.linescore.home_team_errors,
                                    boxScoreData.linescore.home_team_hits,
                                    boxScoreData.linescore.away_team_runs,
                                    boxScoreData.linescore.away_team_errors,
                                    boxScoreData.linescore.away_team_hits,
                                    boxScoreData.linescore.inning_line_score,
                                    boxScoreData.batting[0].batter,
                                    boxScoreData.batting[1].batter);


        };
        console.log(boxScore);
        res.json(boxScore);
    });
});

app.listen(8080, () => {
    console.log('The server is running on port 8080')
});





