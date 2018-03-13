import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';
import App from './App';
import store, { history } from './store';

it('renders without crashing', () => { /* eslint no-undef: 'off' */
  const div = document.createElement('div');
  ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>), div);
});
