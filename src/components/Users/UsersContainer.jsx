import { connect } from 'react-redux';
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
  followUser,
  unfollowUser,
} from '../../redux/users-reducer';
import Users from './Users';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import {
  getUsersFromState,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from '../../redux/users-selectors';

class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.getUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    const pageSize = this.props.pageSize; 
    this.props.getUsers(pageNumber, pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
          followUser={this.props.followUser}
          unfollowUser={this.props.unfollowUser}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsersFromState(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    followUser,
    unfollowUser,
  })
)(UsersContainer);
