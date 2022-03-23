const Token = artifacts.require("Token");

module.exports = function (deployer) {
    const initialSupply = 1000000000
    deployer.deploy(Token, initialSupply);
};
