import s from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={`${s.message} ${ ((props.id) % 2) ? s.right : s.left}`}>
      <img className={s.avatar} src={props.ava} />
      <h3 className={s.messageText}>
        {props.message}
      </h3> 
    </div>
  );
};

export default Message;