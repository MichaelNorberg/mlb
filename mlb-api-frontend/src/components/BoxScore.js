import React from 'react';

class BoxScore extends React.Component{
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <table class="table table-dark">
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
                        <tr>
                        <th scope="row">jose</th>
                        <td>5</td>
                        <td>5</td>
                        <td>5</td>
                        <td>5</td>
                        <td>5</td>
                        <td>5</td>
                        <td>5</td>
                        </tr>
                        <tr>
                        <th scope="row">donald</th>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BoxScore;