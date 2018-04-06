import React from 'react';


class Inning extends React.Component {
    render() {
        return(
            <th scope="col">{this.props.inning}</th>
        );
    }
}

export default Inning;