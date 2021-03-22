import { connect } from 'react-redux';
import {
  addMessageActionCreator,
} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (text) => {
      dispatch(addMessageActionCreator(text));
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);