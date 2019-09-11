import { combineReducers } from "redux";
import coursesList from "./coursesList";
import rating from "./rating";
import wishlist from './wishlist';

const rootReducer = combineReducers({
  coursesList,
  rating,
  wishlist
});

export default rootReducer;
