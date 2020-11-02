import { connect } from "react-redux";
import Filter from "./Filter";
import {showAll, showCompleted, showNotCompleted} from "../../redux/slices/filter";

function mapDispatch2Props(dispatch) {
  return {
    showAll: () => dispatch(showAll()),
    showCompleted: () => dispatch(showCompleted()),
    showNotCompleted: () => dispatch(showNotCompleted()),
  };
}

export default connect(null, mapDispatch2Props)(Filter);