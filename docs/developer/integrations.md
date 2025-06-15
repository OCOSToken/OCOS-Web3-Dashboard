
# Integrations Guide

This document explains how to integrate external services, APIs, oracles, and widgets with the OCOS Web3 Dashboard.  
Proper integration ensures reliable price data, liquidity analytics, user authentication, and community engagement.

---

## 1. PancakeSwap API Integration

**Purpose:**  
Fetch real-time OCOS token price, liquidity, volume, and pool analytics.

**How to Integrate:**
- Use the official PancakeSwap subgraph or REST API.
- Example REST endpoint for pair info:  
  `https://api.pancakeswap.info/api/v2/tokens/{TOKEN_ADDRESS}`
- Fetch via `fetch` or `axios` in React/Node.js.
- Parse response for price, liquidity, and 24h volume.

**Sample Code:**
```js
const response = await fetch('https://api.pancakeswap.info/api/v2/tokens/0xa249ba073c01ceb65eafae7625d8f503c1f61c84');
const data = await response.json();
console.log(data.data.price);
```

---

## 2. Chainlink Oracle Integration

**Purpose:**  
Obtain decentralized price feeds (e.g., BNB/USD) for accurate conversion and audit.

**How to Integrate:**
- Import Chainlink Data Feed contracts into your frontend or use Chainlink nodes from the backend.
- For on-chain usage (Solidity), use:
  ```solidity
  AggregatorV3Interface priceFeed = AggregatorV3Interface(<BNB/USD FEED ADDRESS>);
  (, int price,,,) = priceFeed.latestRoundData();
  ```
- For off-chain, use Chainlink nodes' REST API where available.

---

## 3. BSCScan API Integration

**Purpose:**  
Display transaction history, monitor on-chain events, and analyze user wallet activity.

**How to Integrate:**
- Register for an API key on [BSCScan](https://bscscan.com/myapikey).
- Use endpoints such as:
  - `/api?module=account&action=tokentx&address={WALLET_ADDRESS}`
- Parse for hash, amount, timestamp, etc.

**Sample Code:**
```js
const response = await fetch(`https://api.bscscan.com/api?module=account&action=tokentx&address=${wallet}&apikey=YOUR_API_KEY`);
const data = await response.json();
```

---

## 4. Wallet Integration (MetaMask, Trust Wallet, WalletConnect)

**Purpose:**  
Enable user authentication and blockchain transactions.

**How to Integrate:**
- Use `@web3-react/core`, `wagmi`, or `web3modal`.
- Listen for wallet events (accountsChanged, chainChanged).
- Request connection on button click.

**Sample Code:**
```js
import { useWeb3React } from '@web3-react/core';
const { activate, account } = useWeb3React();
<button onClick={() => activate(injected)}>Connect Wallet</button>
```

---

## 5. Telegram/Discord/Twitter Widgets

**Purpose:**  
Boost user engagement, provide support, and display community feeds.

**How to Integrate:**
- Telegram: Use [Telegram Widget](https://core.telegram.org/widgets/login) or link to group.
- Discord: Use [Discord Widget](https://support.discord.com/hc/en-us/articles/212595618-Widget) embed.
- Twitter: Use [Twitter Timeline Widget](https://publish.twitter.com/) for feed embeds.

---

## 6. Chain/Network Expansion (ETH, Polygon, etc.)

**Purpose:**  
Enable cross-chain token tracking, liquidity, and analytics.

**How to Integrate:**
- Update supported networks in wallet provider and dashboard config.
- Add RPC endpoints, contract addresses, and chain IDs in `.env` or config files.
- Use multi-chain compatible libraries (e.g., wagmi, ethers.js, web3modal).

---

## 7. Custom Smart Contract Integration

**Purpose:**  
Directly interact with OCOS and other smart contracts for staking, airdrop, governance, etc.

**How to Integrate:**
- Import contract ABI in `/src/contracts/`.
- Use ethers.js or web3.js to call contract methods.
- Always handle user approval and errors gracefully.

---

## 8. Security & Best Practices

- Always validate and sanitize API responses.
- Use HTTPS endpoints for all API calls.
- Never expose sensitive keys on frontend.
- Regularly audit dependencies and integration code.

---

## 9. Useful Links

- [PancakeSwap Docs](https://docs.pancakeswap.finance/)
- [Chainlink Docs](https://docs.chain.link/)
- [BSCScan API Docs](https://docs.bscscan.com/)
- [Ethers.js Docs](https://docs.ethers.io/)
- [Web3Modal](https://docs.walletconnect.com/2.0/web/web3modal/about)
- [OCOS Community Telegram](https://t.me/OCOS_Official)

---

**For further integration support, please open an Issue or contact the OCOS core team.**
