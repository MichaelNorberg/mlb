import React from 'react';

class ListView extends React.Component{
    collectData = (event) => {
        event.preventDefault();
        /* let searchTerm = {searchTerm: this.refs.search.value.toLowerCase()}; */
        let date = this.refs.date.value.split("-")
        console.log(date)
        let year = date[0];
        let month = date[1];
        let day = date[2]
        console.log(year, month, day)
        this.props.getGameData(year, month, day);
        /* this.search(searchTerm); */
        /* this.refs.date.value = ''; */
      };
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <form>
                    <label for="Date">Select Date </label>
                    <input id="date" type="date" ref="date"/>
                    <button onClick={this.collectData} className="btn btn-outline-dark" type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default ListView;