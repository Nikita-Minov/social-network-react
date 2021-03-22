import React from 'react';
import {Formik, useFormik} from 'formik';


const CreatePost = (props) => {
  const formik = useFormik({
    initialValues: {
      post: '',
    },
    onSubmit: values => {
      addPost(values.post);
      formik.resetForm();
    }
  })

   let addPost = (post) => {
     props.addPost(post);
   };

  return (
    <form onSubmit={formik.handleSubmit} >
      <div>
        <textarea
        name='post'
        id='post'
        onChange={formik.handleChange} 
        value={formik.values.post} />
      </div>
      <div>
        <button type='submit' >Add post</button> 
      </div>     
    </form>  
  );
}

export default CreatePost;