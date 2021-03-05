import s from "./Navbar.module.css";

const Navbar = () => {
  return (
     <nav className={s.nav} >
        <div className={s.item} >
          <a href="#s" className={s.link} >Profile</a>
        </div>
        <div className={s.item} >
          <a href="#s" className={s.link} >Messages</a>
        </div>
        <div className={s.item} >
          <a href="#s" className={s.link} >News</a>
        </div>
        <div className={s.item} >
          <a href="#s" className={s.link} >Music</a>
        </div>
        <div className={s.item} >
          <a href="#s" className={s.link} >Settings</a>
        </div>
      </nav>
  );
}

export default Navbar;