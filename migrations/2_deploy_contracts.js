const PHDToken = artifacts.require("PHDToken");

module.exports = function(deployer) {
  deployer.deploy(PHDToken);
};
