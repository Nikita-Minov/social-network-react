const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
  dialogs: [
    {
      id: 1,
      name: 'Zina',
      ava:
        'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg',
    },
    { id: 2, name: 'Nikita', ava: 'http://archilab.online/images/1/123.jpg' },
    {
      id: 3,
      name: 'Misha',
      ava:
        'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png',
    },
    {
      id: 4,
      name: 'Dima',
      ava:
        'http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg',
    },
  ],
  messages: [
    {
      id: 1,
      message: 'Privet',
      ava:
        'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg',
    },
    {
      id: 2,
      message: 'Privet',
      ava: 'http://archilab.online/images/1/123.jpg',
    },
    {
      id: 3,
      message: 'Kak dela?',
      ava:
        'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg',
    },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let stateCopy = {
        ...state,
        messages: [...state.messages],
      };
      let newMessage = {
        id: 5,
        message: action.newMessage,
        ava:
          'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg',
      };

      stateCopy.messages.push(newMessage);
      stateCopy.newMessageText = '';
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addMessageActionCreator = (message) => {
  return {
    type: ADD_MESSAGE,
    newMessage: message,
  };
};

export default dialogsReducer;
