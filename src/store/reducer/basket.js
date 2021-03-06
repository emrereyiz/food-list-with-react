import {UPDATE_BASKET} from "../constant";
const initialState = {
    basket: []
};
export default function(state = initialState, action){
    switch (action.type) {
        case UPDATE_BASKET:
            return {
                basket: action.payload
            }
        default:
            return state
    }
}
