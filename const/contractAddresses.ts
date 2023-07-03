/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Fantom } from "@thirdweb-dev/chains";
export const NETWORK = Fantom;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0x0d6e7D59a2aA9fd9F0b5612eE6d5F2C324369cE9";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  "0x73EfadA5C7B523CFAF187dB4CF23cB5c6f63c5EE";

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://ftmscan.com/address/0x0d6e7D59a2aA9fd9F0b5612eE6d5F2C324369cE9";
