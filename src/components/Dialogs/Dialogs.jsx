import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";
import React from 'react';

const Dialogs = (props) => {
  
  let dialogsElement = props.state.dialogs.map( d => {
    return <DialogItem ava={d.ava} name={d.name} id={d.id} />
  });

  let messagesElements = props.state.messages.map( m => {
    return <Message ava={m.ava} message={m.message} id={m.id} />;
  });

  let newMessage = React.createRef();

  let addMessage = () => {
    let text = newMessage.current.value;
    props.addMessage(text);
  }

  let onMessageChange = () => {
    let text = newMessage.current.value;
    props.updateNewMessageText(text);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElement}</div>
      <div className={s.messages}>
        {messagesElements}
        <textarea
          onChange={onMessageChange}
          value={props.dialogsPage.newMessageText}
          ref={newMessage}
        />
        <button onClick={addMessage}>Отправить</button>
      </div>
    </div>
  );
}

export default Dialogs;