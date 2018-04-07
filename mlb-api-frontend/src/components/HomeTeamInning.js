import React from 'react';

//represents one home team inning result
class HomeTeamInning extends React.Component {
    render() {
        return(
            <td>{this.props.homeInning}</td>
        );
    }
}

export default HomeTeamInning;