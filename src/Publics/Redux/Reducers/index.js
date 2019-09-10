import { combineReducers } from "redux";
import coursesList from "./coursesList";
import rating from "./rating";

const rootReducer = combineReducers({
  coursesList,
  rating
});

export default rootReducer;
