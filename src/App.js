import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import React from 'react';
import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    } else {
      return (
        <div className="app-wrapper">
          <HeaderContainer />
          <NavbarContainer store={this.props.store} />
          <div className="app-wrapper-content">
            <Route
              path="/dialogs"
              render={() => <DialogsContainer store={this.props.store} />}
            />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer store={this.props.store} />}
            />
            <Route path="/news" render={() => <News />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/friends" render={() => <Friends />} />
            <Route path="/login" render={() => <Login />} />
          </div>
        </div>
      );
    }
  }
}

const MapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(MapStateToProps, { initializeApp })(App);
