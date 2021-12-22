const initialState = {
items: [],
isLoaded: false,
}

const pizzas = (state = initialState, action) => {
    if (action.type === "SET_PIZZAS") {
        return {
            ...state,
            items: action.payload,
        }
    }
    return state;
}
export default pizzas;

// import {actionTypesPizzas} from "../actionTypes/pizzasAT";
//
// const initialState = {
// items: [],
// }
//
// const pizzasReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case actionTypesPizzas.SET_PIZZAS:
//             return {
//                 ...state,
//                 items: action.payload,
//             }
//         default: return state
//     }
// }
//
// export default pizzasReducer;
