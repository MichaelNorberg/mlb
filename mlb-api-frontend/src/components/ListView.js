import React from 'react';
import ListForm from './ListForm';
import ListItem from './ListItem';

class ListView extends React.Component{
    render() {
        let gameListJSX;
        if (this.props.games[0] === 'No Games Today') {
            gameListJSX = <h2>No Games Today</h2>
        }
        else {
            let gameArray= Array.from(this.props.games);
            gameListJSX= gameArray.map((game, i) => {
                return <ListItem homeTeam={game.homeTeam}
                                 awayTeam={game.awayTeam}
                                 status={game.status}
                                 homeScore={game.homeScore} 
                                 awayScore={game.awayScore}
                                 gameDataDirectory={game.gameDataDirectory}
                                 getBoxScore={this.props.getBoxScore} 
                                 key={i}
                                 />}); 
        };
        return (
            <div className="container">
                <div className="row"></div>
                <ListForm getGameData={this.props.getGameData}/>
                {gameListJSX}
            </div>
        );
    }
}

export default ListView;