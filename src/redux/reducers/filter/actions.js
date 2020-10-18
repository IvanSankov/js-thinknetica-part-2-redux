export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETED = "SHOW_COMPLETED";
export const SHOW_NOT_COMPLETED = "SHOW_NOT_COMPLETED";

export function showAll(state) {
  return setFilter(state, SHOW_ALL);
}

export function showCompleted(state) {
  return setFilter(state, SHOW_COMPLETED);
}

export function showNotCompleted(state) {
  return setFilter(state, SHOW_NOT_COMPLETED);
}

function setFilter(state, action) {
  return Object.assign({}, state, {show: action});
}