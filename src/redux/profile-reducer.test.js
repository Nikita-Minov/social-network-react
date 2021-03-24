import profileReducer, {addPostActionCreator, deletePost} from './profile-reducer';

let state = {
  posts: [
    { id: 1, post: 'Hi, how are you?', likesCount: 54 },
    { id: 2, post: 'Norm', likesCount: 12 },
    { id: 3, post: 'Norm', likesCount: 54 },
  ],
};

it('new post shold be increment', () => {
  let action = addPostActionCreator('hello.com');

  let newState = profileReducer(state, action);

  expect( newState.posts.length).toBe(4);
})

it('message of new post shold be ...', () => {
  let action = addPostActionCreator('hello.com');

  let newState = profileReducer(state, action);

  expect(newState.posts[3].post).toBe('hello.com');
});

it('after deleting length of messages should be decrement', () => {
  let action = deletePost(1);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(2);
});

