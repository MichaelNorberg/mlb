import React from 'react';
import ListForm from './ListForm';
import ListItem from './ListItem';

class ListView extends React.Component{
    render() {
        if (this.props.games[0] === 'No Games Today') {
            console.log('your doing it peter')
            let gameListJSX = <div>No Games Today</div>
        }
        /* else { */
            let gameArray= Array.from(this.props.games);
            let gameListJSX;
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
        /* }; */
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