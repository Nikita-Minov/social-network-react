import s from "./MyPosts.module.css";
import "./Post/Post";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.postsBlock} >
      <div>
        <h1>
          My posts
        </h1>
        <div>
          <div>
           <textarea></textarea> 
          </div>
          <div>
            <button>Add post</button> 
          </div>     
        </div>
      </div>
      <div className={s.posts} >
        <Post message="Hi, ti lox" like="27" />
        <Post message="Ya znaiu" like="54" />
      </div>
      
    </div>  
  );
}

export default MyPosts;