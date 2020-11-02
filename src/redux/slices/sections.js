import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  "1qazwsx": {
    id: "1qazwsx",
    title: "First section",
    completed: false,
    subsections: {
      "1poilkj": {
        id: "1poilkj",
        title: "Subsection 1.1",
        completed: false,
      },
      "2njtrfg": {
        id: "2njtrfg",
        title: "Subsection 1.2",
        completed: true,
      }
    }
  },
  "2dckgest": {
    id: "2dckgest",
    title: "Second section",
    completed: false,
    subsections: {
      "1bdjest": {
        id: "1bdjest",
        title: "Subsection 2.1",
        completed: false,
      },
    }
  },
};

function isAllSubsectionCompleted(subsection) {
  return  Object.entries(subsection).every(data => data[1].completed);
}

function generateUuid() {
  return Math.random().toString(36).substring(7);
}

const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    addNewSubSection(state, action) {
      const uuid = generateUuid();
      const section = state[action.payload.sectionId];

      section.subsections[uuid] = {
        id: uuid,
        title: action.payload.title,
        completed: false
      };

      section.completed = false;
    },
    addNewSection(state, action) {
      const uuid = generateUuid();

      state[uuid] = {
        id: uuid,
        title: action.payload.title,
        completed: false,
        subsections: {}
      };
    },
    markSubsectionAsComplete(state, action) {
      const section = state[action.payload.sectionId];

      section.subsections[action.payload.subsectionId].completed = true;

      if (isAllSubsectionCompleted(section.subsections)) {
        section.completed = true;
      }
    }
  }
});

export const { addNewSection, addNewSubSection, markSubsectionAsComplete } = sectionsSlice.actions;
export default sectionsSlice.reducer;