# Troubleshooting Guide – OCOS Web3 Dashboard

This guide covers common issues users and developers may encounter when using or deploying the OCOS Web3 Dashboard, with practical solutions for each.

---

## 1. Wallet Connection Problems

### **Issue:** Wallet (MetaMask, Trust Wallet) fails to connect or is not detected  
**Possible Causes:**  
- Browser extension not installed or not enabled  
- Unsupported network selected  
- Site not HTTPS (some wallets require secure context)

**Solutions:**  
- Ensure MetaMask/Trust Wallet is installed and unlocked  
- Switch to the supported network (e.g. BSC Mainnet, Chain ID 56)  
- Use the dashboard on an HTTPS-enabled domain  
- Clear browser cache and refresh the page  
- Try another browser (Chrome, Firefox, Edge recommended)

---

## 2. Live Price or Liquidity Not Loading

### **Issue:** Price chart or pool analytics shows “Loading…” or remains empty  
**Possible Causes:**  
- PancakeSwap or Chainlink API rate limits or downtime  
- RPC endpoint issues or network congestion  
- Local firewall blocking API requests

**Solutions:**  
- Check network status at [BSCScan](https://bscscan.com/) or [Chainlink Status](https://status.chain.link/)  
- Try again after a few minutes  
- Change or update the RPC endpoint in `.env`  
- Ensure your internet connection is stable  
- For developers, check browser console for CORS or fetch errors

---

## 3. Staking or Airdrop Transaction Fails

### **Issue:** Error or “Transaction reverted” when staking, unstaking, or claiming  
**Possible Causes:**  
- Insufficient OCOS balance or BNB for gas  
- Wrong network selected in wallet  
- Outdated contract addresses or ABI

**Solutions:**  
- Make sure your wallet has enough OCOS and BNB (for gas fees)  
- Double-check you are on the correct network  
- Refresh contract data in the dashboard or update `.env`  
- For technical errors, expand the error for details and check support channels

---

## 4. Dashboard Not Displaying Properly

### **Issue:** UI elements are missing, broken, or layout is incorrect  
**Possible Causes:**  
- Browser incompatibility  
- Corrupt cached files or cookies  
- Ad-blockers or browser extensions interfering

**Solutions:**  
- Use a modern, up-to-date browser  
- Disable ad-blockers/extensions and reload the site  
- Clear browser cache/cookies  
- On mobile, try desktop mode or another device

---

## 5. Language Switch Not Working

### **Issue:** Changing language does not update interface  
**Possible Causes:**  
- Missing or corrupt translation files  
- JavaScript errors or build issues  
- Language not fully supported in translation JSON

**Solutions:**  
- For users: refresh the page or clear cache  
- For devs: check `/public/locales/` for missing/invalid JSON  
- Update translation files and redeploy if needed

---

## 6. Unable to Deploy or Build Project

### **Issue:** Build fails (`npm run build`) or app won’t start  
**Possible Causes:**  
- Missing environment variables  
- Incorrect Node.js or npm version  
- Dependency conflicts

**Solutions:**  
- Check and complete all values in `.env`  
- Use recommended Node.js version (see `/docs/deployment/environment-config.md`)  
- Run `npm install` to refresh dependencies  
- Delete `node_modules` and `package-lock.json`, then reinstall

---

## 7. Security & Account Issues

### **Issue:** Suspicious activity, phishing warnings, or account locked  
**Possible Causes:**  
- Unofficial site or phishing attempt  
- Wallet security compromised  
- Multiple incorrect login attempts

**Solutions:**  
- Only use the official site: [https://app.ocos.io](https://app.ocos.io)  
- Never share your seed phrase or private key  
- Contact support via [info@ocos.io](mailto:info@ocos.io) for urgent help  
- Reset wallet or change passwords if compromised

---

## 8. Getting More Help

- Read [FAQ](faq.md) and [User Guide](user-guide.md)
- Join our [Telegram Community](https://t.me/OCOS_Official)  
- Report technical bugs on [GitHub Issues](https://github.com/OCOSToken/OCOS-Web3-Dashboard/issues)  
- For urgent support, email [info@ocos.io](mailto:info@ocos.io)

---

**Tip:** If you encounter a bug not listed here, try a hard refresh (Ctrl+F5), clear cache, and check your internet/network settings. Most front-end and wallet issues can be fixed with these steps.

—

_OCOS Support Team_
