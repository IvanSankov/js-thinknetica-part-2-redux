import {cloneDeep} from "lodash";

export const ADD_NEW_SECTION = "ADD_NEW_SECTION";
export const ADD_NEW_SUBSECTION = "ADD_NEW_SUBSECTION";
export const MARK_SUBSECTION_AS_COMPLETE = "MARK_SUBSECTION_AS_COMPLETE";

export function addNewSubSection(state, action) {
  const newState = cloneDeep(state);
  const uuid = generateUuid();
  const section = newState[action.sectionId];

  section.subsections[uuid] = {
    id: uuid,
    title: action.title,
    completed: false
  };

  section.completed = false;

  return newState;
}

export function addNewSection(state, action) {
  const newState = cloneDeep(state);
  const uuid = generateUuid();

  newState[uuid] = {
    id: uuid,
    title: action.title,
    completed: false,
    subsections: {}
  };

  return newState;
}

export function markSubsectionAsComplete(state, action) {
  const newState = cloneDeep(state);
  const section = newState[action.sectionId];

  section.subsections[action.subsectionId].completed = true;

  if (isAllSubsectionCompleted(section.subsections)) {
    section.completed = true;
  }

  return newState;
}

function isAllSubsectionCompleted(subsection) {
  return  Object.entries(subsection).every(data => data[1].completed);
}

function generateUuid() {
  return Math.random().toString(36).substring(7);
}