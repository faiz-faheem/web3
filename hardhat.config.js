//require("@matterlabs/hardhat-zksync-solc");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.17",
    defaultNetwork: "sepolia",
    networks: {
      hardhat: {},
      sepolia: {

        url: "https://11155111.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
          //"https://rpc.ankr.com/eth_sepolia",
        accounts: [`0x${process.env.PRIVATE_KEY}`],
      },
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
