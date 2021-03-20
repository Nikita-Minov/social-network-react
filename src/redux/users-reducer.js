import { usersAPI } from "../api/api";

const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROPGRESS = 'TOGGLE_IS_FOLLOWING_PROPGRESS';

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }

    case SET_USERS: {
      return { ...state, users: [...action.users] };
    }

    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }

    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalCount };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROPGRESS: {
      return { ...state,
        followingInProgress: action.isFetching
        ? [...state.followingInProgress, action.userId] 
        : [...state.followingInProgress.filter(id => id != action.userId)]}
    }
    default:
      return state;
  };
};

export const follow = (userId) => {
  return {type: FOLLOW, userId}
};
export const unfollow = (userId) => {
  return {type: UNFOLLOW, userId}
};
export const setUsers = (users) => {
  return {type: SET_USERS, users}
};
export const setCurrentPage = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage };
};
export const setTotalUsersCount = (totalCount) => {
  return {type: SET_TOTAL_USERS_COUNT, totalCount}
}
export const setIsFetching = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching};
}
export const toggleFollowingProgress = (isFetching, userId) => {
  return { type: TOGGLE_IS_FOLLOWING_PROPGRESS, isFetching, userId };
};

export const getUsers = (currentPage, pageSize) => {
 return (dispatch) => {
  dispatch(setIsFetching(true));
  usersAPI
    .getUsers(currentPage, pageSize)
    .then((data) => {
      dispatch(setIsFetching(false));
      dispatch(setUsers(data.items));
      let totalCount;
      if (data.totalCount > 50) totalCount = 50;
      dispatch(setTotalUsersCount(totalCount));
    });
 }
}

export const followUser = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    usersAPI.unfollowUser(id).then((data) => {
      if (data.resultCode == 0) {
        dispatch(unfollow(id));
        dispatch(toggleFollowingProgress(false, id));
      }
    });
  }
}

export const unfollowUser = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    usersAPI.followUser(id).then((data) => {
      if (data.resultCode == 0) {
        dispatch(follow(id));
        dispatch(toggleFollowingProgress(false, id));
      }
    });
  }
}

export default usersReducer;