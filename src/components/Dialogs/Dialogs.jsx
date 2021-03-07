import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {

  let dialogs = [
    {id: 1, name: 'Zina'},
    {id: 2, name: 'Nikita'},
    {id: 3, name: 'Misha'},
    {id: 4, name: 'Dima'}
  ];

  let messages = [
    {id: 1, message: 'Privet'},
    {id: 2, message: 'Privet'},
    {id: 3, message: 'Kak dela?'}
  ];
  
  let dialogsElement = dialogs.map( d => {
    return <DialogItem name={d.name} id={d.id} />
  });

  let messagesElements = messages.map( m => {
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