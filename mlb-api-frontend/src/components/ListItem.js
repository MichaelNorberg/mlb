import React from 'react';
import {Link} from 'react-router-dom';

class ListItem extends React.Component{
    render() {
        let winnerStyle = {
            color: "red",
        };
        return (
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 centerCol">
                <Link to={"/" + this.props.homeTeam + "vs" + this.props.awayTeam} 
                      onClick={() => {this.props.getBoxScore(this.props.gameDataDirectory)}}>
                    <table class="table table-dark">
                        <thead>
                            <tr>
                            <th scope="col">Teams</th>
                            <th className="tableCellStyle" scope="col">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row" style= {Number(this.props.homeScore) > Number(this.props.awayScore) ? winnerStyle: {} }>
                                {this.props.homeTeam}
                            </th>
                            <td className="tableCellStyle">{this.props.homeScore}</td>
                            </tr>
                            <tr>
                            <th scope="row" style= {Number(this.props.awayScore) > Number(this.props.homeScore) ? winnerStyle: {} }>
                                {this.props.awayTeam}
                            </th>
                            <td className="tableCellStyle">{this.props.awayScore}</td>
                            </tr>
                            <tr>
                            <th scope="row">{this.props.status}</th>
                            </tr>
                        </tbody>
                    </table>
                </Link>

            </div>
        );
    }
}

export default ListItem;