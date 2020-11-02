import { combineReducers } from "redux";

import sections from "../slices/sections";
import filter from "../slices/filter";

export default combineReducers({
  sections,
  filter
});