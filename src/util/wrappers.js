// import { UserAuthWrapper } from 'redux-auth-wrapper';
import { routerActions } from 'react-router-redux';
import { connectedReduxRedirect } from 'redux-auth-wrapper/history4/redirect';
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';

const locationHelper = locationHelperBuilder({});

// Layout Component Wrappers

export const UserIsAuthenticated = connectedReduxRedirect({
  authenticatedSelector: state => state.user.data !== null,
  redirectAction: routerActions.replace,
  redirectPath: '/', // '/login' by default.
  wrapperDisplayName: 'UserIsAuthenticated',
});

export const UserIsNotAuthenticated = connectedReduxRedirect({
  // authenticatedSelector: state => state.user !== null && state.user.data === null,
  authenticatedSelector: state => state.user.data === null,
  redirectAction: routerActions.replace,
  redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/dashboard',
  wrapperDisplayName: 'UserIsNotAuthenticated',
  allowRedirectBack: false,
});

// UI Component Wrappers

export const VisibleOnlyAuth = connectedAuthWrapper({
  // authenticatedSelector: state => state.user !== null && state.user.data,
  authenticatedSelector: state => state.user.data !== null,
  wrapperDisplayName: 'VisibleOnlyAuth',
});

export const HiddenOnlyAuth = connectedAuthWrapper({
  // authenticatedSelector: state => state.user !== null && state.user.data === null,
  authenticatedSelector: state => state.user.data === null,
  wrapperDisplayName: 'HiddenOnlyAuth',
});


// Layout Component Wrappers

/* export const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user.data,
  redirectAction: routerActions.replace,
  failureRedirectPath: '/', // '/login' by default.
  wrapperDisplayName: 'UserIsAuthenticated',
}); */

/* export const UserIsNotAuthenticated = UserAuthWrapper({
  authSelector: state => state.user,
  redirectAction: routerActions.replace,
  failureRedirectPath: (state, ownProps) => ownProps.location.query.redirect || '/dashboard',
  wrapperDisplayName: 'UserIsNotAuthenticated',
  predicate: user => user.data === null,
  allowRedirectBack: false,
}); */

// UI Component Wrappers

/* export const VisibleOnlyAuth = UserAuthWrapper({
  authSelector: state => state.user,
  wrapperDisplayName: 'VisibleOnlyAuth',
  predicate: user => user.data,
  FailureComponent: null,
}); */

/* export const HiddenOnlyAuth = UserAuthWrapper({
  authSelector: state => state.user,
  wrapperDisplayName: 'HiddenOnlyAuth',
  predicate: user => user.data === null,
  FailureComponent: null,
}); */
