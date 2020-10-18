import { connect } from "react-redux";
import Filter from "./Filter";
import {SHOW_ALL, SHOW_COMPLETED, SHOW_NOT_COMPLETED} from "../../redux/reducers/filter/actions";

function mapDispatch2Props(dispatch) {
  return {
    showAll: function () {
      return dispatch({
        type: SHOW_ALL
      });
    },
    showCompleted: function () {
      return dispatch({
        type: SHOW_COMPLETED
      });
    },
    showNotCompleted: function () {
      return dispatch({
        type: SHOW_NOT_COMPLETED
      });
    },
  };
}

export default connect(null, mapDispatch2Props)(Filter);