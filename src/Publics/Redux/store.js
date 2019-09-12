import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";

import reducers from "./Reducers/index";

// const logger = createLogger();
// logger,
const store = createStore(reducers, applyMiddleware(promiseMiddleware));

export default store;
