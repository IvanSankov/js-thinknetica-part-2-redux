import { combineReducers } from "redux";

import contentListReducer from "./content-list";
import filter from "../slices/filter";

export default combineReducers({
  sections: contentListReducer,
  filter
});