/* eslint jsx-a11y/anchor-is-valid: 'off', react/prop-types: 'off',
react/prefer-stateless-function: 'off' */
import React from 'react';
// import { Link } from 'react-router';
import { Route, Switch, Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import { HiddenOnlyAuth, UserIsAuthenticated, UserIsNotAuthenticated, VisibleOnlyAuth } from './util/wrappers';

// UI Components
import LoginButtonContainer from './user/ui/loginbutton/LoginButtonContainer';
import LogoutButtonContainer from './user/ui/logoutbutton/LogoutButtonContainer';

// Styles
import './css/oswald.css';
import './css/open-sans.css';
import './css/pure-min.css';
import './App.css';
import Profile from './user/layouts/profile/Profile';
import Dashboard from './layouts/dashboard/Dashboard';
import SignUp from './user/layouts/signup/SignUp';
import Home from './layouts/home/Home';

const profileComponent = UserIsAuthenticated(Profile);
const dashboardComponent = UserIsAuthenticated(Dashboard);
const signupComponent = UserIsNotAuthenticated(SignUp);

const OnlyAuthLinks = VisibleOnlyAuth(() =>
  (
    <span>
      <li className="pure-menu-item">
        <Link to="/dashboard" className="pure-menu-link">Dashboard</Link>
      </li>
      <li className="pure-menu-item">
        <Link to="/profile" className="pure-menu-link">Profile</Link>
      </li>
      <LogoutButtonContainer />
    </span>));

const OnlyGuestLinks = HiddenOnlyAuth(() =>
  (
    <span>
      <li className="pure-menu-item">
        <Link to="/signup" className="pure-menu-link">Sign Up</Link>
      </li>
      <LoginButtonContainer />
    </span>));

// console.log(new OnlyGuestLinks());

const App = () => (
  <div className="App">
    <nav className="navbar pure-menu pure-menu-horizontal">
      <ul className="pure-menu-list navbar-right">
        <OnlyGuestLinks />
        <OnlyAuthLinks />
      </ul>
      <Link to="/" className="pure-menu-heading pure-menu-link">Truffle Box</Link>
    </nav>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={dashboardComponent} />
      <Route path="/signup" component={signupComponent} />
      <Route path="/profile" component={profileComponent} />
    </Switch>
  </div>
);

/* class App extends Component {
  render() {
    const OnlyAuthLinks = VisibleOnlyAuth(() =>
      (
        <span>
          <li className="pure-menu-item">
            <Link to="/dashboard" className="pure-menu-link">Dashboard</Link>
          </li>
          <li className="pure-menu-item">
            <Link to="/profile" className="pure-menu-link">Profile</Link>
          </li>
          <LogoutButtonContainer />
        </span>));

    const OnlyGuestLinks = HiddenOnlyAuth(() =>
      (
        <span>
          <li className="pure-menu-item">
            <Link to="/signup" className="pure-menu-link">Sign Up</Link>
          </li>
          <LoginButtonContainer />
        </span>));

    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
          <ul className="pure-menu-list navbar-right">
            <OnlyGuestLinks />
            <OnlyAuthLinks />
          </ul>
          <Link to="/" className="pure-menu-heading pure-menu-link">Truffle Box</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="dashboard" component={UserIsAuthenticated(Dashboard)} />
          <Route path="signup" component={UserIsNotAuthenticated(SignUp)} />
          <Route path="profile" component={UserIsAuthenticated(Profile)} />
        </Switch>
      </div>
    );
  }
} */

// const App = () => `<div>LOOK!</div>`;

export default App;
// export default withRouter(connect()(App));
