import { combineReducers } from "redux";

import table from "./table";
import search from "./search";


const rootReducer = combineReducers({
  table,
  search
});

export default rootReducer;