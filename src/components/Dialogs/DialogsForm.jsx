import {useFormik} from 'formik';

const DialogsForm = (props) => {

  const formik = useFormik({
    initialValues: {
      message: ''
    },
    onSubmit: values => {
      addMessage(values.message);
      formik.resetForm();
    }
  })
  
  let addMessage = (message) => {
    props.addMessage(message);
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <textarea
      name='message'
      id='message'
      onChange={formik.handleChange}
      value={formik.values.message}
      />
      <button type='submit' >Отправить</button>
    </form>
        
  );
}

export default DialogsForm;