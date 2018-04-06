import React from 'react';


class Batter extends React.Component {
    render() {
        return(
            <tr>
                <th scope="row">{this.props.name}</th>
                <td>{this.props.atBats}</td>
                <td>{this.props.runs}</td>
                <td>{this.props.hits}</td>
                <td>{this.props.rbi}</td>
                <td>{this.props.walks}</td>
                <td>{this.props.strikeOuts}</td>
                <td>{this.props.average}</td>
            </tr>
        );
    }
}

export default Batter;