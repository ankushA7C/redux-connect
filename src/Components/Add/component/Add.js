import React, { Component } from 'react';
import "./style.css"
import { connect } from "react-redux";
import { action } from "../../../Actions/action"


class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            flavor: 'grapefruit'
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = () => {
        const detail = {
            name: this.state.name,
            flavor: this.state.flavor
        };
        //this.props.dispatch({ type: "ADD_ITEM", payload: detail });
        this.props.dispatch(action.getFlavor(detail));
        this.setState({ name: '', flavor: 'grapefruit' });
        alert("Added successfully");
    }
    onView = () => {
        this.props.history.push("/view");
    }
    render() {
        return (
            <>
                <div className="form-container">
                    <div className="form-custom">
                        <label>
                            Your Name:</label>
                        <input value={this.state.name} name="name" onChange={this.handleChange} />
                        <label>
                            Pick your favorite flavor:</label>
                        <select value={this.state.flavor} name="flavor" onChange={this.handleChange}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>

                        <input type="submit" value="Submit" onClick={this.handleSubmit} />
                    </div>
                    <button onClick={this.onView}>View Page</button>
                </div>
            </>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    details: state.details,
});

export default connect(mapStateToProps)(Add);

