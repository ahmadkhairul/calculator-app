import { createStore, combineReducers, applyMiddleware } from "redux";
import user from "../_reducers/user";
import articles from "../_reducers/article";
import categories from "../_reducers/category";
import beneficiaries from "../_reducers/beneficiary";
import transactions from "../_reducers/transaction";
import { logger, promise } from "../middleware";

const rootReducers = combineReducers({
  user,
  articles,
  categories,
  beneficiaries,
  transactions
});

const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
