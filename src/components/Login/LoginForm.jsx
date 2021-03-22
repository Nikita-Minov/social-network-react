import {useFormik} from 'formik';

const LoginForm = (props) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null , 2));
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