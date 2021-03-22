import React from 'react';
import s from "./MyPosts.module.css";
import "./Post/Post";
import Post from "./Post/Post";
import CreatePost from './CreatePost/CreatePost';

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

  return (
    <div className={s.postsBlock} >
      <div>
        <h1>
          My posts
        </h1>
        <CreatePost addPost={props.addPost} />
      </div>
      <div className={s.posts} >
        {postsElements}
      </div>
      
    </div>  
  );
}

export default MyPosts;