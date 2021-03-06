import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header} >
      <div className="wrapper">
        <NavLink to="/news" className={s.logo}>FaceVK</NavLink>
      </div>
    </header>
  );
}

export default Header;