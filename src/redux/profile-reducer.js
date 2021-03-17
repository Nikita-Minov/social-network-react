const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPATE-NEW-POST-TEXT';

let initialState = {
    posts: [
      { id: 1, post: 'Hi, how are you?', likesCount: 54 },
      { id: 2, post: 'Norm', likesCount: 12 },
      { id: 3, post: 'Norm', likesCount: 54 },
    ],
    newPostText: "",
  }

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
      id: 5,
      post: state.newPostText,
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
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {
        ...state,
        newPostText: action.newText,
      };
      return stateCopy;
    }
    default:
      return state;
  }
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default profileReducer;