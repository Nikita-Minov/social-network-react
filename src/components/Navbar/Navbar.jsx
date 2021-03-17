import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
import s from "./Navbar.module.css";

const Navbar = (props) => {

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.active} className={s.link}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.active} className={s.link}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.active} className={s.link}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" activeClassName={s.active} className={s.link}>
          Users
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.active} className={s.link}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.active} className={s.link}>
          Settings
        </NavLink>
      </div>
      <div className={s.item}>
        <Friends friends={props.navBar.friends} />
      </div>
    </nav>
  );
}

export default Navbar;