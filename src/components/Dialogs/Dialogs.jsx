import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  
  let dialogsElement = props.dialogs.map( d => {
    return <DialogItem name={d.name} id={d.id} />
  });

  let messagesElements = props.messages.map( m => {
    return <Message message={m.message} id={m.id} />;
  });

  return (
    <div className={s.dialogs} >
      <div className={s.dialogItems} >
        {dialogsElement}
      </div>
      <div className={s.messages} >
        {messagesElements}
      </div>
    </div>
  );
}

export default Dialogs;