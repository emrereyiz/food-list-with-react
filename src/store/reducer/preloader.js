import {SHOW_PRELOADER, HIDE_PRELOADER} from "../constant";
const initialState = {
    visible: true,
};
export default function(state = initialState, action){
    switch (action.type) {
        case SHOW_PRELOADER:
            return {
                visible: true
            }
        case HIDE_PRELOADER:
            return {
                visible: false
            }
        default:
            return state
    }
}
