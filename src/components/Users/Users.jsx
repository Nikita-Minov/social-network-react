import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  users,
  ...props
}) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
      {users.map((u) =>
        (<User
          user={u}
          followingInProgress={props.followingInProgress}
          key={u.id}
          unfollowUser={props.unfollowUser}
          followUser={props.followUser}
        />)
      )}
    </div>
  );
};

export default Users;
