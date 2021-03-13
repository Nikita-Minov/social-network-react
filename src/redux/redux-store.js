import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import navBarReducer from './navBar-reducer';

let reducers = combineReducers({
  profilePage: profileReducer, 
  dialogsPage: dialogsReducer, 
  navBar: navBarReducer,
});

let store = createStore(reducers);

export default store;