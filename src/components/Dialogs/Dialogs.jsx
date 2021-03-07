import s from "./Dialogs.module.css";
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`;

  return (
    <div className={s.dialog + ' ' + s.active} >
      <NavLink to={path} >{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  );
}

const Dialogs = (props) => {

  let dialogsData = [
    {id: 1, name: 'Zina'},
    {id: 2, name: 'Nikita'},
    {id: 3, name: 'Misha'},
    {id: 4, name: 'Dima'}
  ];

  let messagesData = [
    {id: 1, message: 'Privet'},
    {id: 2, message: 'Privet'}
  ];



  return (
    <div className={s.dialogs} >
      <div className={s.dialogItems} >
        <DialogItem name={dialogsData[0].name} id ={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name='Nichego' id='3' />
        <DialogItem name='Strashnogo' id='4' />
      </div>
      <div className={s.messages} >
        <Message message={messagesData[0].message} id={messagesData[0].id} />
        <Message message={messagesData[1].message} id={messagesData[0].id} />
      </div>
    </div>
  );
}

export default Dialogs;