import {ADD_NEW_SUBSECTION} from "../../redux/reducers/content-list/actions";
import {connect} from "react-redux";
import Section from "./Section";

function mapDispatch2Props(dispatch) {
  return {
    addNewSubsection: function (sectionId, title) {
      return dispatch({
        type: ADD_NEW_SUBSECTION,
        sectionId,
        title
      });
    }
  };
}

export default connect(null, mapDispatch2Props)(Section);