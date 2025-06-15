
# OCOS Web3 Dashboard – API Reference

This document details all available APIs provided by the OCOS Web3 Dashboard for integrations, extensions, and automation.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Authentication](#authentication)
3. [REST API Endpoints](#rest-api-endpoints)
    - [GET /api/prices](#get-apiprices)
    - [GET /api/liquidity](#get-apiliquidity)
    - [GET /api/staking](#get-apistaking)
    - [POST /api/airdrop/claim](#post-apiairdropclaim)
    - [GET /api/history](#get-apihistory)
    - [POST /api/web3/transaction](#post-apiweb3transaction)
4. [WebSocket Feeds](#websocket-feeds)
5. [Error Codes](#error-codes)
6. [Examples](#examples)
7. [Rate Limits & Security](#rate-limits--security)
8. [Contact](#contact)

---

## Introduction

The OCOS API allows external tools, partners, and advanced users to programmatically access real-time OCOS data, submit transactions, and automate platform interactions. All endpoints return JSON.

---

## Authentication

Most public endpoints do not require authentication.  
Private or sensitive operations (e.g., airdrop claim, transaction submit) require a valid wallet signature or API key.

- **Authorization Header Example:**
  ```
  Authorization: Bearer <api-key-or-wallet-jwt>
  ```

---

## REST API Endpoints

### GET `/api/prices`

**Description:**  
Returns real-time price data for OCOS token and supported pairs.

**Query Params:**  
- `pair` (optional): e.g. `OCOS/BNB`, `OCOS/USDT`

**Response Example:**
```json
{
  "pair": "OCOS/BNB",
  "price": 0.0245,
  "change24h": 2.35,
  "volume24h": 172000
}
```

---

### GET `/api/liquidity`

**Description:**  
Shows liquidity pool data, TVL, and APY for OCOS pairs.

**Query Params:**  
- `pair` (optional)

**Response Example:**
```json
{
  "pair": "OCOS/BNB",
  "tvl": 121500,
  "apy": 19.6,
  "liquidity_tokens": 48000
}
```

---

### GET `/api/staking`

**Description:**  
Lists staking pools, rewards, and user status (if authenticated).

**Query Params:**  
- `address` (optional): wallet address

**Response Example:**
```json
{
  "address": "0xA1b2...",
  "staked": 3500,
  "rewards": 85,
  "pending": 5
}
```

---

### POST `/api/airdrop/claim`

**Description:**  
Claims airdrop for a connected wallet. Requires signature.

**Request Body:**
```json
{
  "address": "0xA1b2...",
  "signature": "0x..."
}
```

**Response Example:**
```json
{
  "status": "success",
  "amount": 150,
  "txHash": "0x09fa..."
}
```

---

### GET `/api/history`

**Description:**  
Returns transaction and activity logs for a given address.

**Query Params:**  
- `address` (required)

**Response Example:**
```json
[
  { "type": "stake", "amount": 500, "date": "2025-06-12" },
  { "type": "claim", "amount": 150, "date": "2025-06-14" }
]
```

---

### POST `/api/web3/transaction`

**Description:**  
Submits a signed Web3 transaction for relay.

**Request Body:**
```json
{
  "rawTx": "0x..."
}
```

**Response Example:**
```json
{
  "status": "pending",
  "txHash": "0x59b1..."
}
```

---

## WebSocket Feeds

- **wss://app.ocos.io/ws/prices**  
  - Real-time token prices and liquidity updates
- **wss://app.ocos.io/ws/activity**  
  - Transaction, pool, and on-chain event notifications

---

## Error Codes

| Code | Meaning                         |
|------|---------------------------------|
| 200  | Success                         |
| 400  | Bad Request / Invalid Params    |
| 401  | Unauthorized / Invalid Signature|
| 404  | Not Found                       |
| 429  | Rate Limit Exceeded             |
| 500  | Internal Server Error           |

---

## Examples

**Get OCOS/BNB price:**
```
GET https://app.ocos.io/api/prices?pair=OCOS/BNB
```

**Claim airdrop:**
```
POST https://app.ocos.io/api/airdrop/claim
Body: { "address": "...", "signature": "..." }
```

---

## Rate Limits & Security

- Up to 60 requests/minute per IP for public endpoints.
- Authenticated endpoints may be stricter.
- All requests are logged for abuse prevention.
- Never share your API keys or wallet signatures.

---

## Contact

For API keys, advanced integration, or bug reports, contact:  
[api@ocos.io](mailto:api@ocos.io)

---

_Last updated: 15 June 2025_
