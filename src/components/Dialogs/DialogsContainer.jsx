import React from 'react';
import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  let state = props.store.getState();

  let addMessage = (text) => {
    props.store.dispatch(addMessageActionCreator(text));
  }

  let onMessageChange = (text) => {
    props.store.dispatch(onMessageChangeActionCreator(text));
  }

  return (
    <Dialogs 
    onMessageChange={onMessageChange} 
    addMessage={addMessage} 
    messages={state.dialogsPage.messages}
    dialogs={state.dialogsPage.dialogs}
    newMessageText={state.dialogsPage.newMessageText} />
  );
}

export default DialogsContainer;