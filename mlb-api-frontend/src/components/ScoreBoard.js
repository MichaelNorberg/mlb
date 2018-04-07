import React from 'react';
import Inning from './Inning';
import AwayTeamInning from './AwayTeamInning';
import HomeTeamInning from './HomeTeamInning';

class ScoreBoard extends React.Component{
    render() {
        console.log(this.props.boxScore)
        let lineScoreArray = Array.from(this.props.boxScore.lineScore);
        console.log(lineScoreArray);
        let inningJSX;
        inningJSX = lineScoreArray.map((inning, i) => {
            return <Inning inning={inning.inning}
                            key={i}
                            />});
        let homeTeamInningJSX;
        homeTeamInningJSX = lineScoreArray.map((homeInning, i) => {
            return <HomeTeamInning homeInning={homeInning.home}
                                   key={i}
                                   />});
        let awayTeamInningJSX;
        awayTeamInningJSX = lineScoreArray.map((awayInning, i) => {
            return <AwayTeamInning awayInning={awayInning.away}
                                    key={i}
                                    />});
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 centerCol">
                <table class="table table-dark mt-3">
                    <thead>
                        <tr>
                        <th scope="col">Teams</th>
                        {inningJSX}
                        <th scope="col">R</th>
                        <th scope="col">H</th>
                        <th scope="col">E</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">{this.props.boxScore.homeTeam}</th>
                        {homeTeamInningJSX}
                        <td>{this.props.boxScore.homeTeamRuns}</td>
                        <td>{this.props.boxScore.homeTeamHits}</td>
                        <td>{this.props.boxScore.homeTeamErrors}</td>
                        </tr>
                        <tr>
                        <th scope="row">{this.props.boxScore.awayTeam}</th>
                        {awayTeamInningJSX}
                        <td>{this.props.boxScore.awayTeamRuns}</td>
                        <td>{this.props.boxScore.awayTeamHits}</td>
                        <td>{this.props.boxScore.awayTeamErrors}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ScoreBoard;