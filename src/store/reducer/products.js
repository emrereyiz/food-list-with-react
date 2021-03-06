import {SET_PRODUCT} from "../constant";
const initialState = {
    products: [],
};
export default function(state = initialState, action){
    switch (action.type) {
        case SET_PRODUCT:
            return {
                products: action.payload
            }
        default:
            return state
    }
}
