import { combineReducers } from "redux";
import coursesList from "./coursesList";
import rating from "./rating";
import cart from "./cart";

const rootReducer = combineReducers({
  coursesList,
  cart,
  rating
});

export default rootReducer;
