import Navbar from './Navbar';

const NavbarContainer = (props) => {

  let state = props.store.getState();

  return (
    <Navbar friends={state.navBar.friends} />
  );
}

export default NavbarContainer;