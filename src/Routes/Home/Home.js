import React, { Component } from "react"
import Add from "../../Components/Add/index"
import View from "../../Components/View/index"
import { Route } from "react-router-dom"
class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Route exact path="/" render={props => <Add {...props} />} />
                <Route exact path="/view" render={props => <View {...props} />} />
            </>
        )
    }
}

export default Home;
