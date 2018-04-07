import React from 'react';

class ListView extends React.Component{
    collectData = (event) => {
        event.preventDefault();
        let date = this.refs.date.value.split("-");
        let year = date[0];
        let month = date[1];
        let day = date[2];
        this.props.getGameData(year, month, day);
      };
    collectTeamData = (event) => {
        event.preventDefault();
        let team = this.refs.team.value;
        this.props.changeTeam(team)
    }
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 centerCol formStyle">
                <form>
                    <label className="elementMarginStyle" for="teamSelect">Select Your Team</label>
                    <select onChange={this.collectTeamData} ref="team" class="form-control elementMarginStyle" id="teamSelect">
                        <option>Blue Jays</option>
                        <option>Red Sox</option>
                        <option>Orioles</option>
                        <option>White Sox</option>
                        <option>Indians</option>
                        <option>Tigers</option>
                        <option>Astros</option>
                        <option>Royals</option>
                        <option>Angels</option>
                        <option>Twins</option>
                        <option>Yankees</option>
                        <option>Athletics</option>
                        <option>Mariners</option>
                        <option>Rays</option>
                        <option>Rangers</option>
                        <option>Diamondbacks</option>
                        <option>Braves</option>
                        <option>Cubs</option>
                        <option>Reds</option>
                        <option>Rockies</option>
                        <option>Dogers</option>
                        <option>Marlins</option>
                        <option>Brewers</option>
                        <option>Mets</option>
                        <option>Phillies</option>
                        <option>Pirates</option>
                        <option>Padres</option>
                        <option>Giants</option>
                        <option>Cardinals</option>
                        <option>Nationals</option>
                    </select>
                    <label className="elementMarginStyle" for="Date">Select Date </label>
                    <input className="elementMarginStyle" id="date" type="date" ref="date"/>
                    <button onClick={this.collectData} className="btn btn-outline-dark elementMarginStyle" type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default ListView;