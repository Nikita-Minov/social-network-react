import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";
import React from 'react';
import { Redirect } from "react-router";
import DialogsForm from "./DialogsForm";

const Dialogs = (props) => {
  
  let dialogsElement = props.dialogsPage.dialogs.map( d => {
    return <DialogItem ava={d.ava} key={d.id} name={d.name} id={d.id} />
  });

  let messagesElements = props.dialogsPage.messages.map( m => {
    return <Message ava={m.ava} key={m.id} message={m.message} id={m.id} />;
  });
  
  if(!props.isAuth) return <Redirect to={'./login'}/>

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElement}</div>
      <div className={s.messages}>
        {messagesElements}
        <DialogsForm addMessage={props.addMessage} />
      </div>
    </div>
  );
}

export default Dialogs;