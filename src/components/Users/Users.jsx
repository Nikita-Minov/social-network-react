import s from "./Users.module.css";
import axios from 'axios';
import userPhoto from '../../assets/img/user.jpg'
import React from 'react';


class Users extends React.Component {

  componentDidMount() {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
          .then((res) => {
            this.props.setUsers(res.data.items);
          });
  }

  render() {
    return (
      <div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>Russia</div>
                <div></div>
              </span>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;