import {
  ADD_NEW_SECTION,
  ADD_NEW_SUBSECTION,
  addNewSection,
  addNewSubSection,
  MARK_SUBSECTION_AS_COMPLETE, markSubsectionAsComplete
} from "./actions";

const sections = {
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

export default function contentListReducer(state = sections, action) {
  switch (action.type) {
    case ADD_NEW_SUBSECTION:
      return addNewSubSection(state, action);

    case ADD_NEW_SECTION:
      return addNewSection(state, action);

    case MARK_SUBSECTION_AS_COMPLETE:
      return markSubsectionAsComplete(state, action);
  }

  return state;
}