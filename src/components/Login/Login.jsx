import LoginForm from './LoginForm';
const Login = (props) => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm loginUser={props.loginUser} />
    </div>
  );
};

export default Login;