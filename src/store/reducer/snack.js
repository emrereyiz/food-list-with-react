import {SET_SNACK} from "../constant";
const initialState = {
    snackStatus: false,
};
export default function(state = initialState, action){
    switch (action.type) {
        case SET_SNACK:
            return {
                snackStatus: action.payload
            }
        default:
            return state
    }
}
