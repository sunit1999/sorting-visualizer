import { combineReducers } from "redux";
import bars from "./bars";
import filter from "./filter";

const rootReducer = combineReducers({
  bars,
  filter,
});

export default rootReducer;
