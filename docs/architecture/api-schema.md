# API Schema – OCOS Web3 Dashboard

## Overview

This document describes the API schema and structure used in the OCOS Web3 Dashboard.  
APIs provide real-time data for price, liquidity, staking, airdrop, transaction history, and integrations with external services.

---

## 1. Price and Market Data API

### `/api/prices`

- **Description:** Fetches the latest price and chart data for OCOS and supported tokens.
- **Method:** `GET`
- **Response:**
    ```json
    {
      "symbol": "OCOS",
      "priceUSD": "0.0245",
      "priceBNB": "0.000062",
      "24hChange": "-2.1",
      "volume24h": "150000",
      "updatedAt": "2025-06-15T14:02:00Z"
    }
    ```
- **Source:** PancakeSwap, Chainlink Oracle, BSCScan

---

## 2. Liquidity Pool API

### `/api/liquidity`

- **Description:** Returns analytics for all supported liquidity pools.
- **Method:** `GET`
- **Response:**
    ```json
    {
      "pair": "OCOS/BNB",
      "tvl": "900000",
      "poolShare": "2.4",
      "apy": "14.8",
      "lpTokenAddress": "0x...",
      "updatedAt": "2025-06-15T14:02:00Z"
    }
    ```

---

## 3. Staking API

### `/api/staking`

- **GET:** Fetch user's staking balances and history
    ```json
    {
      "address": "0x...",
      "staked": "5000",
      "rewards": "28.5",
      "stakeStart": "2025-05-01T10:01:00Z",
      "stakeHistory": [
        {"amount": "1000", "date": "2025-05-01"},
        {"amount": "4000", "date": "2025-05-10"}
      ]
    }
    ```
- **POST:** Stake or withdraw tokens (protected by wallet signature)

---

## 4. Airdrop API

### `/api/airdrop`

- **GET:** Query eligibility and claim status for connected wallet
    ```json
    {
      "address": "0x...",
      "eligible": true,
      "claimableAmount": "200",
      "claimed": false
    }
    ```
- **POST:** Claim airdrop (signed)

---

## 5. Transaction History API

### `/api/history`

- **GET:** Fetches on-chain transaction logs for a wallet address.
    ```json
    [
      {
        "hash": "0x123...",
        "type": "swap",
        "amount": "500",
        "token": "OCOS",
        "timestamp": "2025-06-13T19:00:00Z",
        "status": "success"
      },
      ...
    ]
    ```

---

## 6. Multi-language Content API

### `/api/locales/:lang`

- **GET:** Loads translation JSON for the requested language (az, en, tr)
    ```json
    {
      "dashboard": "Dashboard",
      "staking": "Staking",
      ...
    }
    ```

---

## 7. External Integrations

- **PancakeSwap API:**  
  - `/api/pancakeswap/pairs`
  - `/api/pancakeswap/tickers`
- **Chainlink Oracle:**  
  - `/api/oracle/bnbusd`

---

## 8. Webhooks (Optional for advanced integrations)

- **/webhook/swap-completed**  
  - Event payload for off-chain integrations and notifications.

---

## Authentication & Security

- Most APIs are public/read-only.
- Write/protected endpoints require Web3 wallet signature (SIWE).
- No sensitive keys are exposed client-side.
- Rate limiting, anti-spam and XSS protection in place.

---

## See Also

- [architecture-overview.md](architecture-overview.md)
- [smart-contracts.md](smart-contracts.md)
- [api-reference.md](../developer/api-reference.md)

---

*For suggestions or API extensions, open an issue or discussion in the OCOS Web3 Dashboard repository.*
