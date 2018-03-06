/* eslint import/no-extraneous-dependencies: 'off', import/no-dynamic-require: 'off' */
import AuthenticationContract from '../../../../build/contracts/Authentication.json';
import { loginUser } from '../loginbutton/LoginButtonActions';
import store from '../../../store';

const contract = require('truffle-contract');

export default function signUpUser(name) { /* eslint consistent-return: 'off' */
  const web3 = store.getState().web3.web3Instance;

  // Double-check web3's status.
  if (typeof web3 !== 'undefined') {
    return function authenticate(dispatch) {
      // Using truffle-contract we create the authentication object.
      const authentication = contract(AuthenticationContract);
      authentication.setProvider(web3.currentProvider);

      // Declaring this for later so we can chain functions on Authentication.
      let authenticationInstance;

      // Get current ethereum wallet.
      web3.eth.getCoinbase((error, coinbase) => {
        // Log errors, if any.
        if (error) {
          console.error(error);
        }

        authentication.deployed().then((instance) => {
          authenticationInstance = instance;

          // Attempt to sign up user.
          authenticationInstance.signup(name, { from: coinbase })
            .then(() =>
            // If no error, login user.
              dispatch(loginUser()))
            .catch((err) => {
            // If error...
              console.log(err);
            });
        });
      });
    };
  }
  console.error('Web3 is not initialized.');
}
