import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, post: 'Hi, how are you?', likesCount: 54 },
      { id: 2, post: 'Norm', likesCount: 12 },
      { id: 3, post: 'Norm', likesCount: 54 },
    ],
  },
  dialogsPage: {
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
  },
  navBar: {
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
  },
};

export let addPost = (postMessage) => {

  let newPost = {
    id: 5,
    post: postMessage,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
}

export default state;