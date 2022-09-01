require("@nomicfoundation/hardhat-toolbox");

task("balance", "Prints an account's balance").setAction(async () => {});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  settings: {
    evmVersion: "solc", // istanbul, berlin or london
    optimizer: {
      enabled: false,
      runs: 200,
    },
  },
};
