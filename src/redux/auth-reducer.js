import { headerAPI, authAPI } from '../api/api';

const SET_USER_DATA = 'samurai-newtwork/auth/SET_USER_DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default:
      return state;
  }
};

export const setUserData = (userId, email, login, isAuth) => {
  return { type: SET_USER_DATA, payload: { userId, email, login, isAuth } };
};

export const getUser = () => async (dispatch) => {
  let data = await headerAPI.getMe();

  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  let data = await authAPI.login(email, password, rememberMe);
  
  if (data.resultCode === 0) {
    dispatch(getUser());
  }
};

export const logout = () => async (dispatch) => {
  let data = await authAPI.logout();

  if (data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
};

export default authReducer;
