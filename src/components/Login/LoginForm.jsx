import {useFormik} from 'formik';

const validate = values => {
  const errors = {};

  if(!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'invalid email adress';
  }

  if(!values.password) {
    errors.password = 'Required';
  } else if(values.password.length <= 6) {
    errors.password = 'Пароль меньше 6 символов'
  }

  return errors;
}

const LoginForm = (props) => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: '',
    },
    validate,
    onSubmit: values => {
      props.login(values.email, values.password, values.rememberMe)
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="email"
        id="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <input
        type="text"
        name="password"
        id="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <input
        type="checkbox"
        name="rememberMe"
        id="rememberMe"
        onChange={formik.handleChange}
        value={formik.values.rememberMe}
      /> remember Me

      <button type="submit">Submit</button>
    </form>
  );
};
export default LoginForm;