import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header} >
      <div className="wrapper">
        <a href="#s" className={s.logo} >FaceVK</a>
      </div>
    </header>
  );
}

export default Header;