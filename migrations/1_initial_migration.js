const Tesla = artifacts.require("Tesla");
const TeslaFactory = artifacts.require("TeslaFactory");

module.exports = function (deployer) {
  deployer.deploy(Tesla);
};

module.exports = function (deployer) {
  deployer.deploy(TeslaFactory);
};
