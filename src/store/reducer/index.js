import { combineReducers } from "redux";
import preloader from "./preloader";
import products from "./products";
import basket from "./basket";
import snack from "./snack";
export default combineReducers({preloader, products, basket, snack});