import React from 'react';
import ListForm from './ListForm';
import ListItem from './ListItem';

class ListView extends React.Component{
    render() {
        let gameListJSX;
        if (this.props.games === 'No Games Today') {
            gameListJSX = <h2 className="conditionalStyle">No Games Today</h2>
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
                <div className="row center"></div>
                <ListForm getGameData={this.props.getGameData}
                          changeTeam={this.props.changeTeam}
                          favoriteTeam={this.props.favoriteTeam}/>
                {gameListJSX}
            </div>
        );
    }
}

export default ListView;