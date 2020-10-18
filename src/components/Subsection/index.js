import {MARK_SUBSECTION_AS_COMPLETE} from "../../redux/reducers/content-list/actions";
import {connect} from "react-redux";
import Subsection from "./Subsection";

function mapDispatchToProp(dispatch) {
  return {
    markAsComplete: function (sectionId, subsectionId) {
      return dispatch({
        type: MARK_SUBSECTION_AS_COMPLETE,
        sectionId,
        subsectionId
      });
    }
  }
}

export default connect(null, mapDispatchToProp)(Subsection);