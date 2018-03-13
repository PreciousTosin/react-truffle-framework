/* eslint no-undef: 'off'  */
const Authentication = artifacts.require('./Authentication.sol');

contract('Authentication', (accounts) => {
  it('...should sign up and log in a user.', () => Authentication.deployed().then((instance) => {
    authenticationInstance = instance;

    return authenticationInstance.signup('testuser', { from: accounts[0] });
  }).then(() => authenticationInstance.login.call()).then((userName) => {
    assert.equal(web3.toUtf8(userName), 'testuser', 'The user was not signed up.');
  }));
});
