# OCOS Web3 Dashboard

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Build Status](https://img.shields.io/github/workflow/status/OCOS-ORG/ocos-web3-dashboard/CI)](https://github.com/OCOS-ORG/ocos-web3-dashboard/actions)
[![Website](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://ocos.io)

A professional, multi-language Web3 dashboard for the OCOS ecosystem.  
Provides wallet connection, real-time price charts, liquidity tracking, staking, and airdrop participation — with responsive design and top-tier UI/UX.

---

## 🚀 Features

- **Wallet Connect:** MetaMask, Trust Wallet, WalletConnect & more
- **Real-Time Price Charts:** Powered by PancakeSwap, Chainlink and DEX APIs
- **Liquidity Pool Monitoring:** Detailed TVL, APY, Pair Analytics, Pool Composition
- **Staking Dashboard:** Stake/unstake tokens, view and claim rewards
- **Airdrop Module:** Participate in ongoing and future airdrops
- **Multi-language Support:** Azerbaijani, English, Turkish (dynamic switch)
- **Responsive UI:** Fully optimized for both desktop & mobile
- **Transaction History:** Track your swaps, staking, and claim logs on-chain
- **Theme Support:** Dark/Light mode toggle
- **Professional Design:** Modern, animated, intuitive interface
- **Admin Panel:** (Optional) Stats, analytics, user management
- **Security:** Frontend & backend best practices, Web3 anti-phishing standards
- **Extensible:** Easily add NFT, Launchpad, Referral, Notification modules

---

## 🏗️ Architecture

**Frontend:**  
- React.js (Next.js compatible)
- TailwindCSS / Chakra UI  
- Web3.js or Ethers.js  
- i18n for multi-language  
- Chart.js/Recharts for analytics

**Backend (optional for stats, analytics, airdrop validation):**  
- Node.js (Express)
- MongoDB / PostgreSQL  
- REST API / WebSocket feeds  
- API integration with PancakeSwap, Chainlink, BSCScan, etc.

**Smart Contract Integration:**  
- Direct interaction with OCOS Token, Staking, Airdrop, and LP contracts  
- Contract addresses and ABIs in `/contracts/` directory

**DevOps:**  
- Github Actions CI/CD  
- Docker deployment support  
- .env for configuration

---

## 📲 Demo & Screenshots

![OCOS Dashboard Screenshot](docs/screenshots/dashboard-main.png)
![Staking Page](docs/screenshots/staking.png)
![Mobile View](docs/screenshots/mobile.png)

(Live demo: [app.ocos.io](https://app.ocos.io) — soon!)

---

## 🔌 Supported Wallets & Chains

- Binance Smart Chain (BSC)  
- Ethereum (future)  
- Polygon (future)  
- MetaMask, Trust Wallet, WalletConnect, Binance Chain Wallet

---

## 🌐 Multi-language

- Azərbaycan dili
- English
- Türkçe

Dynamic switching supported. Translations in `/public/locales/`.

---

## 🧩 Main Modules

- `/src/components/WalletConnect`
- `/src/components/PriceChart`
- `/src/components/LiquidityPool`
- `/src/components/Staking`
- `/src/components/Airdrop`
- `/src/components/History`
- `/src/components/LanguageSelector`
- `/src/components/AdminPanel` (optional)

---

## ⚙️ Configuration

To get started with OCOS Web3 Dashboard, follow these configuration steps:

1. **Set up environment variables:**
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Fill in all required API keys, contract addresses, and RPC endpoints according to your deployment or development needs.

2. **Add translation files:**  
   Enable multi-language support by editing or adding translation JSON files:
   - **Azerbaijani:** `/public/locales/az/translation.json`
   - **English:** `/public/locales/en/translation.json`
   - **Turkish:** `/public/locales/tr/translation.json`

3. **Update contract addresses and ABIs:**  
   Place your smart contract ABIs and update token and staking contract addresses in:
   - `/contracts/OCOS.json`
   - `/contracts/OCOSStaking.json`
   - (Add more as needed for additional modules)

---

## 📊 Integrations

The dashboard integrates with top-tier APIs and oracles to deliver real-time data and on-chain analytics:
- **PancakeSwap API**: Fetches real-time prices, liquidity pool data, and analytics.
- **Chainlink Oracle**: Provides accurate BNB/USD and other relevant price feeds.
- **BSCScan**: Enables transaction and wallet activity tracking.
- **Optional Integrations**: Telegram, Discord, and Twitter widgets for community interaction.

---

## 🛡️ Security

OCOS Web3 Dashboard is designed with security and user trust as top priorities:
- Adheres to best Web3 and frontend security practices.
- Never stores private keys or mnemonics.
- Utilizes client-side signature verification (Sign-In With Ethereum / SIWE supported).
- Includes anti-phishing and XSS protection mechanisms.
- Follows secure coding, dependency management, and audit procedures.

---

## 📝 Roadmap

**Planned Features and Milestones:**
- [x] Core dashboard with wallet connect
- [x] Real-time price charts
- [x] Staking module
- [x] Airdrop integration
- [ ] NFT panel (Q3 2025)
- [ ] Launchpad integration (Q4 2025)
- [ ] Support for more chains (Ethereum, Polygon)
- [ ] Mobile app (React Native/PWA)

---

## 🤝 Contribution

We welcome pull requests and community contributions!  
To participate, please review our [`CONTRIBUTING.md`](CONTRIBUTING.md) and [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md) guidelines before submitting your PR.

---

## 📄 License

This project is licensed under the **MIT License**.  
See the [`LICENSE`](LICENSE) file for details.

---

## 📬 Contact & Support

- **Website:** [https://ocos.io](https://ocos.io)
- **Email:** [support@ocos.io](mailto:support@ocos.io)
- **Telegram:** [t.me/ocoscommunity](https://t.me/OCOS_Official)

---

> _"Learn what you cannot from real life, experience your dreams virtually with OCOS."_  
