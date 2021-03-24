import { NavLink } from "react-router-dom";
import s from "./Header.module.css";


const Header = (props) => {
  return (
    <header className={s.header} >
      <div className="wrapper">
        <NavLink to="/news" className={s.logo}>FaceVK</NavLink>
        
        <div className={s.loginBlock}>
          {props.isAuth ?  <div>{props.login} <button onClick={props.logout}>Logout</button></div> : <NavLink to='/login/'>Login</NavLink> }
        </div>
      </div>
    </header>
  );
}

export default Header;