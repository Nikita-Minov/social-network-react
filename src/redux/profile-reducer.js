import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS ';

let initialState = {
    posts: [
      { id: 1, post: 'Hi, how are you?', likesCount: 54 },
      { id: 2, post: 'Norm', likesCount: 12 },
      { id: 3, post: 'Norm', likesCount: 54 },
    ],
    profile: null,
    status: ''
  }

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
      id: 5,
      post: action.post,
      likesCount: 0,
      };
      let stateCopy = {
        ...state,
        posts: [...state.posts]
      }
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    }
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile};
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    default:
      return state;
  }
}

export const addPostActionCreator = (post) => {
  return {
    type: ADD_POST,
    post: post
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  };
};

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status
  };
}

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
  .then(data => {
    dispatch(setStatus(data))
  })
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((data) => {
    if(data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};


export default profileReducer;