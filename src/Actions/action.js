export const action = {
    getFlavor
}

function getFlavor(details) {
    return dispatch => {
        dispatch(setFlavor(details));
    };
    function setFlavor(flag) {
        return { type: "ADD_ITEM", payload: flag };
    }
}