import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import { BrowserRouter as Router } from 'react-router-dom';
import { ConnectedRouter as Router } from 'react-router-redux';
import { Provider } from 'react-redux';
import getWeb3 from './util/web3/getWeb3';

// Layouts
import App from './App';

// Redux Store
import store, { history } from './store';

// create history
// const browserHistory = createBrowserHistory();
// Initialize react-router-redux.
// const history = syncHistoryWithStore(browserHistory, store);

// Initialize web3 and set in Redux.
getWeb3
  .then(() => {
    console.log('Web3 initialized!');
  })
  .catch(() => {
    console.log('Error in web3 initialization.');
  });

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
),
document.getElementById('root'));
