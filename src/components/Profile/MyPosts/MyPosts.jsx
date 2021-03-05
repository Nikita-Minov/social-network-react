import s from "./MyPosts.module.css";
import "./Post/Post";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts} >
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      
    </div>  
  );
}

export default MyPosts;