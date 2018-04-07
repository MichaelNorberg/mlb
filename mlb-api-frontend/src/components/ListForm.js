import React from 'react';

class ListView extends React.Component{
    collectData = (event) => {
        event.preventDefault();
        let date = this.refs.date.value.split("-");
        /* console.log(date) */
        let year = date[0];
        let month = date[1];
        let day = date[2];
        /* console.log(year, month, day) */
        this.props.getGameData(year, month, day);
      };
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 centerCol formStyle">
                <form>
                    <label className="elementMarginStyle" for="Date">Select Date </label>
                    <input className="elementMarginStyle" id="date" type="date" ref="date"/>
                    <button onClick={this.collectData} className="btn btn-outline-dark elementMarginStyle" type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default ListView;