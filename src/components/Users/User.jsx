import s from './Users.module.css';
import userPhoto from '../../assets/img/user.jpg';
import { NavLink } from 'react-router-dom';

let User = ({ user, followingInProgress, unfollowUser, followUser }) => {
  return (
    <div key={user.id}>
      <span>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small != null ? user.photos.small : userPhoto} />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                followUser(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollowUser(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>Russia</div>
          <div></div>
        </span>
      </span>
    </div>
  );
};

export default User;
