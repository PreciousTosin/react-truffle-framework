/* eslint import/no-extraneous-dependencies: 'off', consistent-return: off, no-alert: 'off' */
import AuthenticationContract from '../../../../build/contracts/Authentication.json';
import store from '../../../store';

const contract = require('truffle-contract');

export const USER_UPDATED = 'USER_UPDATED';
function userUpdated(user) {
  return {
    type: USER_UPDATED,
    payload: user,
  };
}

export function updateUser(name) {
  const web3 = store.getState().web3.web3Instance;

  // Double-check web3's status.
  if (typeof web3 !== 'undefined') {
    return function authenticateUser(dispatch) {
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

          // Attempt to login user.
          authenticationInstance.update(name, { from: coinbase })
            .then(() => {
            // If no error, update user.

              dispatch(userUpdated({ name }));

              return alert('Name updated!');
            })
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
