import { createSlice, createAction } from "@reduxjs/toolkit";
import { requestSectionInfo, successResponseSectionInfo, errorResponseSectionInfo } from "../actions/sections";

const initialState = {
  isLoading: false,
  error: null,
  entries: {}
};

function isAllSubsectionCompleted(subsection) {
  return  Object.entries(subsection).every(data => data[1].completed);
}

const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    addNewSubSection(state, action) {
      const uuid = action.payload.uuid;
      const section = state.entries[action.payload.sectionId];

      section.subsections[uuid] = {
        id: uuid,
        title: action.payload.title,
        completed: false
      };

      section.completed = false;
    },
    addNewSection(state, action) {
      const uuid = action.payload.uuid;

      state.entries[uuid] = {
        id: uuid,
        title: action.payload.title,
        completed: false,
        subsections: {}
      };
    },
    markSubsectionAsComplete(state, action) {
      const section = state.entries[action.payload.sectionId];

      section.subsections[action.payload.subsectionId].completed = true;

      if (isAllSubsectionCompleted(section.subsections)) {
        section.completed = true;
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(requestSectionInfo, (state, action) => {
        state.isLoading = true;
        state.error = null;
        state.entries = {};
      })
      .addCase(successResponseSectionInfo, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.entries = action.payload;
      })
      .addCase(errorResponseSectionInfo, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.entries = {};
      })
  }
});

export const { addNewSection, addNewSubSection, markSubsectionAsComplete } = sectionsSlice.actions;
export default sectionsSlice.reducer;