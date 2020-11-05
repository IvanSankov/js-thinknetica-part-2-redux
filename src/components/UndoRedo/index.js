import UndoRedo from "./UndoRedo";
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    canUndo: state.sections.past.length > 2,
    canRedo: state.sections.future.length > 0
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UndoRedo)