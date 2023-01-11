import { createStore, combineReducers, applyMiddleware } from "redux";
import user from "../_reducers/user";
import { logger, promise } from "../middleware";

const rootReducers = combineReducers({
  user,
});

const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
