import { combineReducers } from "redux";
import coursesList from "./coursesList";
import rating from "./rating";

import wishlist from './wishlist';
import cart from "./cart";

const rootReducer = combineReducers({
  coursesList,
  cart,
  wishlist,
  rating
});

export default rootReducer;
