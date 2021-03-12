const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
      id: 5,
      message: action.newDialogMessage,
      ava:
        'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg',
      };

      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;
    
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessage;
      return state;
  
    default:
      return state;
  }
}

export const addMessageActionCreator = (text) => {
  return {
    type: ADD_MESSAGE,
    newDialogMessage: text,
  };
};

export const onMessageChangeActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: text,
  };
};

export default dialogsReducer