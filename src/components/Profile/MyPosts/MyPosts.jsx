import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';
import s from "./MyPosts.module.css";
import "./Post/Post";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => {
    return (
      <Post
        post={p.post}
        likesCount={p.likesCount}
        id={p.id}
      />
    );
  });

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <div className={s.postsBlock} >
      <div>
        <h1>
          My posts
        </h1>
        <div>
          <div>
           <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
          </div>
          <div>
            <button onClick={addPost} >Add post</button> 
          </div>     
        </div>
      </div>
      <div className={s.posts} >
        {postsElements}
      </div>
      
    </div>  
  );
}

export default MyPosts;