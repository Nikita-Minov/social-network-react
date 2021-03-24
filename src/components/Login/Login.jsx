import {connect} from 'react-redux';
import {login, logout} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';

import LoginForm from './LoginForm';
const Login = (props) => {

  if(props.isAuth) {
    return <Redirect to={'/profile/'} />
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginForm login={props.login} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})
  
export default connect(mapStateToProps, {
  login,
  logout
})(Login);