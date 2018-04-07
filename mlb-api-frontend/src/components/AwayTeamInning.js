import React from 'react';

//represents one away team inning result
class AwayTeamInning extends React.Component {
    render() {
        return(
            <td>{this.props.awayInning}</td>
        );
    }
}

export default AwayTeamInning;