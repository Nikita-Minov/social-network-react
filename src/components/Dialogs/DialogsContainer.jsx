import { connect } from 'react-redux';
import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onMessageChange: (text) => {
      dispatch(onMessageChangeActionCreator(text));
    },
    addMessage: (text) => {
      dispatch(addMessageActionCreator(text));
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;