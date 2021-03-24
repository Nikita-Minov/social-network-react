let initialState = {
  friends: [
    {
      id: 1,
      name: 'Zina',
      avatar:
        'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg',
    },
    {
      id: 2,
      name: 'Dmitry',
      avatar: 'http://archilab.online/images/1/123.jpg',
    },
    {
      id: 3,
      name: 'Misha',
      avatar:
        'http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg',
    },
  ],
};
const navBarReducer = (state = initialState, action) => {
  return state;
};

export default navBarReducer;
