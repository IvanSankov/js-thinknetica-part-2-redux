import {connect} from "react-redux";
import Statistics from "./Statistics";

function mapStateToProps(state) {
  const props = {
    sectionNumber: 0,
    subSectionNumber: 0,
    completedSectionNumber: 0,
    completedSubSectionNumber: 0,
  };

  const sections = state.sections.entries;

  for (const [sectionId, section] of Object.entries(sections)) {
    props.sectionNumber++;

    if (section.completed) {
      props.completedSectionNumber++;
    }

    for (const [subSectionId, subsection] of Object.entries(section.subsections)) {
      props.subSectionNumber++;

      if (subsection.completed) {
        props.completedSubSectionNumber++;
      }
    }
  }

  return props;
}

export default connect(mapStateToProps)(Statistics);