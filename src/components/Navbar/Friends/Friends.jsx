import Friend from "./Friend/Friend";
import s from "./Friends.module.css";
import { NavLink } from 'react-router-dom';

const Friends = (props) => {
  let friendList = props.friends.map((friend) => {
    return <Friend name={friend.name} avatar={friend.avatar} />;
  });

  return (
    <div className={s.friendsBlock}>
      <NavLink to="/friends" activeClassName={s.active} className={s.link} >
        Friends
      </NavLink>
      <div className={s.friends} >
        {friendList}
      </div>
    </div>
  );
}

export default Friends;