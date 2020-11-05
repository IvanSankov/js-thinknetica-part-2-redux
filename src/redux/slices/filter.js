import { createSlice } from "@reduxjs/toolkit";

const SHOW_ALL = "SHOW_ALL";
const SHOW_COMPLETED = "SHOW_COMPLETED";
const SHOW_NOT_COMPLETED = "SHOW_NOT_COMPLETED";

const initialState = {
  show: SHOW_ALL,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    showAll: state => {
      state.show = SHOW_ALL
    },
    showCompleted: state => {
      state.show = SHOW_COMPLETED
    },
    showNotCompleted: state => {
      state.show = SHOW_NOT_COMPLETED
    },
  }
});

export const {showAll, showCompleted, showNotCompleted} = filterSlice.actions;
export default filterSlice.reducer