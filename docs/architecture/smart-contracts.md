
# Smart Contracts Architecture – OCOS Web3 Dashboard

## Overview

The OCOS Web3 Dashboard relies on several smart contracts deployed on Binance Smart Chain (BSC) and, in the future, other EVM-compatible chains. These contracts are the core of all token, staking, airdrop, and liquidity pool operations, ensuring decentralized, secure, and transparent execution.

---

## Main Contracts

### 1. OCOS Token (BEP-20/ERC-20)

- **Type:** Standard BEP-20/ERC-20 token
- **Functions:** transfer, approve, transferFrom, mint, burn, pause (access control)
- **Roles:** Owner/Admin, Minter, Pauser
- **Key Features:**
  - Upgradable architecture (optional, via proxy)
  - Transparent event logging
  - Integration with DEXs (PancakeSwap, etc.)
  - Used as the main utility/governance token across the OCOS ecosystem

### 2. Staking Contract

- **Purpose:** Allows users to stake OCOS tokens and earn rewards
- **Key Methods:** stake, withdraw, claimRewards, getStakedBalance
- **Reward Mechanism:** Fixed APY or variable, based on pool performance
- **Security:**
  - No admin withdrawal of user funds
  - Uses block.timestamp and on-chain randomness for fairness
  - All stake/unstake/claim events logged transparently

### 3. Airdrop Contract

- **Purpose:** Distributes OCOS tokens to eligible users as part of marketing/community incentives
- **Eligibility:** On-chain proof (e.g., snapshot, Merkle root verification)
- **Key Functions:** claimAirdrop, isEligible, getAirdropAmount
- **Anti-abuse:** Prevents duplicate claims, enforces deadlines

### 4. Liquidity Pool (DEX) Contracts

- **PancakeSwap Pair:** OCOS/BNB, OCOS/USDT, etc.
- **Features:**
  - Automated Market Maker (AMM)
  - Adds/removes liquidity
  - Syncs reserves and emits Swap, Mint, Burn events
  - Price discovery via pool ratios

### 5. Additional (Future) Contracts

- **NFT Contracts:** For NFT rewards, membership, or gamification
- **Launchpad Contracts:** For secure token sales and allocations
- **Bridge Contracts:** For cross-chain asset movement (Ethereum, Polygon, etc.)

---

## Contract Interaction Flow

1. **Wallet Connect:** User connects via MetaMask/WalletConnect
2. **Frontend Calls:** Calls smart contract methods (stake, swap, claim, etc.)
3. **Signature & Send:** User signs and submits transaction on-chain
4. **Event Listening:** Frontend listens to on-chain events (e.g., Staked, Claimed, Transferred)
5. **Off-chain Sync:** (Optional) Backend can validate, index, or aggregate on-chain data for UI

---

## Security Practices

- Contracts audited internally and by 3rd parties
- Upgradable contracts use OpenZeppelin proxies
- Access control enforced via roles (Ownable, Pausable, etc.)
- Follows latest EVM security standards (reentrancy guards, overflow/underflow protection)
- No private keys are ever held by contracts or the dashboard

---

## Sample Contract Structure (Solidity Pseudocode)

```solidity
contract OCOS is ERC20, Ownable, Pausable {
    function mint(address to, uint256 amount) public onlyOwner { ... }
    function burn(uint256 amount) public { ... }
    // ...
}

contract OCOSStaking is Ownable, ReentrancyGuard {
    function stake(uint256 amount) external { ... }
    function withdraw(uint256 amount) external { ... }
    function claimRewards() external { ... }
    // ...
}
```

---

## References

- [OCOS Token Contract (BSCScan)](https://bscscan.com/address/0xYourOCOSTokenAddress)
- [PancakeSwap OCOS/BNB Pair](https://pancakeswap.finance/swap?outputCurrency=0xYourOCOSTokenAddress)
- [OpenZeppelin Contracts Library](https://docs.openzeppelin.com/contracts/)

---

## Change History

- 2025-06-15: Initial version
- 2025-07-01: Added staking/airdrop architecture details

---

**For more technical details and contract ABIs, see `/contracts/` directory.**
