import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import details from "./details"

const reducer = {
    routing: routerReducer,
    details
}
export default combineReducers(reducer);