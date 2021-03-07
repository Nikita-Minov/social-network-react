import s from "./MyPosts.module.css";
import "./Post/Post";
import Post from "./Post/Post";

const MyPosts = () => {

  let postData = [
    {id: 1, post: 'Hi, how are you?', likesCount: 54},
    {id: 2, post: 'Norm', likesCount: 12}
  ];

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
        <Post post={postData[0].post} likesCount={postData[0].likesCount} id={postData[0].id} />
        <Post post={postData[1].post} likesCount={postData[1].likesCount} id={postData[1].id} />
      </div>
      
    </div>  
  );
}

export default MyPosts;