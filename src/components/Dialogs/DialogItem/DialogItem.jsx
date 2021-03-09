import s from "./DialogItem.module.css";
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`;

  return (
    <div className={s.dialog + ' ' + s.active} >
      <img src={props.ava}/>
      <NavLink className={s.dialogLink} to={path} >{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;