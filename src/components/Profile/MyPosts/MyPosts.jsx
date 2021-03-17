import React from 'react';
import s from "./MyPosts.module.css";
import "./Post/Post";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements = props.profilePage.posts.map(p => {
    return (
      <Post
        key={p.id}
        post={p.post}
        likesCount={p.likesCount}
        id={p.id}
      />
    );
  });

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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