import {SHOW_ALL, SHOW_COMPLETED, SHOW_NOT_COMPLETED, showAll, showCompleted, showNotCompleted} from "./actions";

const filter = {
  show: SHOW_ALL,
};

export default function filterReducer(state = filter, action) {
  switch (action.type) {
    case SHOW_ALL:
      return showAll(state);
    case SHOW_COMPLETED:
      return showCompleted(state);
    case SHOW_NOT_COMPLETED:
      return showNotCompleted(state);
  }

  return state;
}