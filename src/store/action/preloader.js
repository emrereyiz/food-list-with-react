import {SHOW_PRELOADER, HIDE_PRELOADER} from "../constant";
export const showPreloader = () => ({
    type: SHOW_PRELOADER
});
export const hidePreloader = () => ({
    type: HIDE_PRELOADER
});