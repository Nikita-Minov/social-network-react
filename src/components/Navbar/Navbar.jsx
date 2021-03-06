import s from "./Navbar.module.css";

const Navbar = () => {
  return (
     <nav className={s.nav} >
        <div className={s.item} >
          <a href="/profile" className={s.link} >Profile</a>
        </div>
        <div className={s.item} >
          <a href="/dialogs" className={s.link} >Messages</a>
        </div>
        <div className={s.item} >
          <a href="/news" className={s.link} >News</a>
        </div>
        <div className={s.item} >
          <a href="/music" className={s.link} >Music</a>
        </div>
        <div className={s.item} >
          <a href="/settings" className={s.link} >Settings</a>
        </div>
      </nav>
  );
}

export default Navbar;