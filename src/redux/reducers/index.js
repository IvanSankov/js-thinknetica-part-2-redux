import { combineReducers } from "redux";
import undoable, { distinctState } from 'redux-undo'

import sections from "../slices/sections";
import filter from "../slices/filter";

export default combineReducers({
  sections: undoable(sections),
  filter
});