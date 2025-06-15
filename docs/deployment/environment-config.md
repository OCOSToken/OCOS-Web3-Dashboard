
# Environment Configuration Guide

This document explains how to configure environment variables for the OCOS Web3 Dashboard. Proper environment configuration is crucial for secure, stable, and scalable deployments.

---

## 1. What Are Environment Variables?

Environment variables are key-value pairs that configure sensitive data and settings (like API keys, contract addresses, endpoints) without hard-coding them in your application codebase.  
This makes your app more secure, flexible, and easy to deploy in different environments (development, staging, production).

---

## 2. Creating the .env File

1. **Locate the template:**  
   The repository includes a `.env.example` file containing all required variables.

2. **Copy to create your actual environment file:**
   ```bash
   cp .env.example .env
   ```

3. **Open `.env` in a text editor and fill in the values as described below.**

---

## 3. Essential Environment Variables

Below are the most common and essential variables for the OCOS Web3 Dashboard:

```
NEXT_PUBLIC_RPC_URL=YOUR_BSC_OR_ETH_RPC_ENDPOINT
NEXT_PUBLIC_OCOS_TOKEN_ADDRESS=0x...
NEXT_PUBLIC_STAKING_CONTRACT_ADDRESS=0x...
NEXT_PUBLIC_CHAIN_ID=56
NEXT_PUBLIC_API_KEYS=YOUR_API_KEY
NEXT_PUBLIC_CHAINLINK_ORACLE_ADDRESS=0x...
NEXT_PUBLIC_EXPLORER_URL=https://bscscan.com
```

**Description of variables:**

- **NEXT_PUBLIC_RPC_URL:**  
  The RPC endpoint for your blockchain network (Binance Smart Chain, Ethereum, etc.).  
  Example: `https://bsc-dataseed.binance.org/`

- **NEXT_PUBLIC_OCOS_TOKEN_ADDRESS:**  
  The deployed OCOS token contract address (BEP-20/ERC-20).

- **NEXT_PUBLIC_STAKING_CONTRACT_ADDRESS:**  
  The deployed OCOS staking contract address.

- **NEXT_PUBLIC_CHAIN_ID:**  
  Chain ID for the target network (56 for BSC mainnet, 1 for Ethereum mainnet, etc.).

- **NEXT_PUBLIC_API_KEYS:**  
  API keys for integrated third-party services (optional, but recommended for rate-limits and advanced features).

- **NEXT_PUBLIC_CHAINLINK_ORACLE_ADDRESS:**  
  The on-chain oracle contract address for real-time price feeds (e.g., BNB/USD).

- **NEXT_PUBLIC_EXPLORER_URL:**  
  Link to your preferred block explorer for transaction lookups.

---

## 4. Advanced/Optional Environment Variables

Depending on your deployment, you may want to set the following:

- **NEXT_PUBLIC_SUPPORTED_LANGUAGES=az,en,tr**  
  Set the list of supported languages.

- **NEXT_PUBLIC_FEATURE_FLAGS=staking,airdrop,nft**  
  Feature flags for experimental or modular features.

- **BACKEND_API_URL=https://api.ocos.io**  
  If using a custom backend for analytics or advanced logic.

---

## 5. Security Recommendations

- **Never commit your actual `.env` file to version control.**  
  Always add `.env` to your `.gitignore`.
- Use separate `.env` files for each environment:  
  - `.env.development`
  - `.env.production`
- Keep API keys, private endpoints, and sensitive data out of frontend-accessible variables unless strictly required (prefix with `NEXT_PUBLIC_` only when necessary).

---

## 6. Example .env File

```
NEXT_PUBLIC_RPC_URL=https://bsc-dataseed.binance.org/
NEXT_PUBLIC_OCOS_TOKEN_ADDRESS=0x0000000000000000000000000000000000000000
NEXT_PUBLIC_STAKING_CONTRACT_ADDRESS=0x0000000000000000000000000000000000000000
NEXT_PUBLIC_CHAIN_ID=56
NEXT_PUBLIC_API_KEYS=your-key
NEXT_PUBLIC_CHAINLINK_ORACLE_ADDRESS=0x0000000000000000000000000000000000000000
NEXT_PUBLIC_EXPLORER_URL=https://bscscan.com
NEXT_PUBLIC_SUPPORTED_LANGUAGES=az,en,tr
NEXT_PUBLIC_FEATURE_FLAGS=staking,airdrop
```

---

## 7. Troubleshooting

- **Wrong or missing variables:**  
  The dashboard may not load, or features (staking, wallet connection) may fail if any required variable is missing or incorrect.
- **API rate limits:**  
  If you see errors fetching price or liquidity data, check your API key and rate limits.

---

## 8. Further Reading

- [12 Factor App: Config](https://12factor.net/config)
- [dotenv documentation](https://github.com/motdotla/dotenv)
- [Next.js Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)

---

**For additional help, contact [support@ocos.io](mailto:support@ocos.io) or open an issue on GitHub.**
