import { NavLink } from "react-router-dom";
import s from "./Friend.module.css";

const Friend = (props) => {
  return (
    <div className={s.friend} >
      <img className={s.avatar} src={props.avatar} />
      <h4 className={s.name} >{props.name}</h4>
    </div>
  );
}

export default Friend;