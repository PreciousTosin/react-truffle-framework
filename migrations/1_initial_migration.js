const Migrations = artifacts.require("./Migrations.sol"); /* eslint no-undef: 'off' */

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
