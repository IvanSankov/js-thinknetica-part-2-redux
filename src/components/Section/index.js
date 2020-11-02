import {addNewSubSection} from "../../redux/slices/sections";
import {connect} from "react-redux";
import Section from "./Section";

function mapDispatch2Props(dispatch) {
  return {
    addNewSubsection: (sectionId, title) => dispatch(addNewSubSection({
      sectionId,
      title
    }))
  };
}

export default connect(null, mapDispatch2Props)(Section);