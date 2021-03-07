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
  return (
    <div className={s.dialogs} >
      <div className={s.dialogItems} >
        <DialogItem name='Obosralsya' id ='1' />
        <DialogItem name='No' id='2' />
        <DialogItem name='Nichego' id='3' />
        <DialogItem name='Strashnogo' id='4' />
      </div>
      <div className={s.messages} >
        <Message message='Pohui' />
        <Message message='Zaebis' />
      </div>
    </div>
  );
}

export default Dialogs;