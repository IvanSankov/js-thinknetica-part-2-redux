import { combineReducers } from "redux";

import contentListReducer from "./content-list";
import filterReducer from "./filter";

export default combineReducers({
  sections: contentListReducer,
  filter: filterReducer
});