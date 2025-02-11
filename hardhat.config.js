require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
    solidity: "0.8.28",
    networks: {
        arbitrumSepolia: {
            url: process.env.ALCHEMY_RPC_URL, // Your Alchemy RPC URL for Arbitrum Sepolia
            accounts: [`0x${process.env.ACCOUNT_PRIVATE_KEY}`] // Your account private key
        }
    },
    etherscan: {
        apiKey: process.env.ARBISCAN_API_KEY // Your Arbiscan API key
    }
};