import React, { Component } from 'react';
import "./style.css"
import { connect } from "react-redux";


class View extends Component {
    constructor(props) {
        super(props);
    }
    onBack = () => {
        this.props.history.push("/")
    }
    render() {
        return (
            <>
                <div className="list-container">
                    <div className="list-custom">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Serial No</th>
                                    <th>Name</th>
                                    <th>flavor</th>
                                </tr>
                                {this.props.details.list && this.props.details.list.map((data, index) => {
                                    return (<tr key={index}><>{index}</><td >{data.name}</td>
                                        <td >{data.flavor}</td></tr>)
                                })}

                            </tbody>
                        </table>

                    </div>
                    <button onClick={this.onBack}>Add Page</button>

                </div>


            </>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    details: state.details,
});

export default connect(mapStateToProps)(View);