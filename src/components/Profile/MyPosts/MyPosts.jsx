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
  }) 

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
        {postsElements}
      </div>
      
    </div>  
  );
}

export default MyPosts;