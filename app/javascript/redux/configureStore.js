import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import messagesReducer from "./message";

const rootReducer = combineReducers({ messagesReducer });
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;