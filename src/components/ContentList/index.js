import { addNewSection } from "../../redux/slices/sections";
import {connect} from "react-redux";
import ContentList from "./ContentList";
import {cloneDeep} from "lodash";


const filters = {
  SHOW_ALL: function (subsection) {
    return true;
  },
  SHOW_COMPLETED: function (subsection) {
    return subsection.completed;
  },
  SHOW_NOT_COMPLETED: function (subsection) {
    return !subsection.completed;
  }
}

function mapStateToProps(state) {
  const sections = {};
  for (const [id, section] of Object.entries(state.sections.entries)) {
    const newSection = cloneDeep(section);
    newSection.subsections = {};

    for (const [subsectionId, subSection] of Object.entries(section.subsections)) {
      if (filters[state.filter.show](subSection)) {
        newSection.subsections[subsectionId] = {...subSection};
      }
    }

    sections[id] = newSection;
  }

  return {
    isLoading: state.sections.isLoading,
    error: state.sections.error,
    sections
  }
}

function mapDispatch2Props(dispatch) {
  return {
    addNewSection: (title) => dispatch(addNewSection({
      title
    }))
  };
}

export default connect(mapStateToProps, mapDispatch2Props)(ContentList);