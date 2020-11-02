import {markSubsectionAsComplete} from "../../redux/slices/sections";
import {connect} from "react-redux";
import Subsection from "./Subsection";

function mapDispatchToProp(dispatch) {
  return {
    markAsComplete: (sectionId, subsectionId) => dispatch(markSubsectionAsComplete({
      sectionId,
      subsectionId
    }))
  }
}

export default connect(null, mapDispatchToProp)(Subsection);