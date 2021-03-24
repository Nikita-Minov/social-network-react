import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS ';
const DELETE_POST = 'DELETE_POST';

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

    case DELETE_POST: {
      return {...state, posts: state.posts.filter(p => p.id != action.postId)}
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

export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    postId,
  };
};

export const getStatus = (userId) => async (dispatch) => {
  let data = await profileAPI.getStatus(userId);
  dispatch(setStatus(data))
}

export const updateStatus = (status) => async (dispatch) => {
  let data = await profileAPI.updateStatus(status)
  if(data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const getUserProfile = (userId) => async (dispatch) => {
  let data = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(data));
};


export default profileReducer;