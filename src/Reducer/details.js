const initialState = {
    name: "",
    flavor: "",
    list: []
}

const details = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM": return {
            ...state,
            name: action.payload.name,
            flavor: action.payload.flavor,
            list: [...state.list, action.payload]

        };
        default: return state;

    }
}
export default details;