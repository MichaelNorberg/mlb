import React from 'react';
import Batter from './Batter'

//represnts the box score for a game
class BoxScore extends React.Component{
    render() {
        let battersJSX;
        if(this.props.home) {
            let homeBattersArray = Array.from(this.props.boxScore.homeBatters);
            battersJSX = homeBattersArray.map((batter, i) => {
                return <Batter  name={batter.name_display_first_last}
                                atBats={batter.ab}
                                runs={batter.r}
                                hits={batter.h}
                                rbi={batter.rbi}
                                walks={batter.bb}
                                strikeOuts={batter.so}
                                average={batter.avg}
                                key={i}
                                />});
        }
        else {
            let awayBattersArray = Array.from(this.props.boxScore.awayBatters);
            battersJSX = awayBattersArray.map((batter, i) => {
                return <Batter  name={batter.name_display_first_last}
                                atBats={batter.ab}
                                runs={batter.r}
                                hits={batter.h}
                                rbi={batter.rbi}
                                walks={batter.bb}
                                strikeOuts={batter.so}
                                average={batter.avg}
                                key={i}
                                />});
        };
        return (
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 centerCol">
                <div className="teamButtonStyle">
                    <button onClick={()=>{this.props.toggleTeams(true)}} className="btn btn-outline-dark elementMarginStyle">
                        {this.props.boxScore.homeTeam}
                    </button>
                    <button onClick={()=>{this.props.toggleTeams(false)}} className="btn btn-outline-dark elementMarginStyle">
                        {this.props.boxScore.awayTeam}
                    </button>
                </div>
                <table class="table table-dark table-responsive">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">AB</th>
                        <th scope="col">R</th>
                        <th scope="col">H</th>
                        <th scope="col">RBI</th>
                        <th scope="col">BB</th>
                        <th scope="col">SO</th>
                        <th scope="col">AVG</th>
                        </tr>
                    </thead>
                    <tbody>
                        {battersJSX}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BoxScore;