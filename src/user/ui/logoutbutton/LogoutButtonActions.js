// import { browserHistory } from 'react-router';
import { push } from 'react-router-redux';
import store from '../../../store';

export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';
function userLoggedOut(user) {
  return {
    type: USER_LOGGED_OUT,
    payload: user,
  };
}

export function logoutUser() {
  return function logOut(dispatch) {
    // Logout user.
    dispatch(userLoggedOut());

    // Redirect home.
    // return browserHistory.push('/');
    return store.dispatch(push('/'));
  };
}
