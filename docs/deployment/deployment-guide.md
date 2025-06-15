
# Deployment Guide

This guide explains how to deploy the OCOS Web3 Dashboard for development, staging, and production environments.  
It covers environment setup, dependencies, configuration, deployment steps, and best practices.

---

## 1. Prerequisites

- **Node.js (>=18.x.x) and npm**
- **Git**
- **Docker** (optional, for containerized deployments)
- **Cloud or VPS access** (for production deployment)

---

## 2. Clone the Repository

```bash
git clone https://github.com/OCOS-ORG/OCOS-Web3-Dashboard.git
cd OCOS-Web3-Dashboard
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Configure Environment Variables

Copy the sample environment file and fill in your custom values:

```bash
cp .env.example .env
```

**Edit `.env` with the following:**

- `NEXT_PUBLIC_RPC_URL` — Blockchain node endpoint (BSC, Ethereum, etc.)
- `NEXT_PUBLIC_OCOS_TOKEN_ADDRESS` — OCOS token contract address
- `NEXT_PUBLIC_STAKING_CONTRACT_ADDRESS` — Staking contract address
- `NEXT_PUBLIC_CHAIN_ID` — Network chain ID (e.g., 56 for BSC)
- `NEXT_PUBLIC_API_KEYS` — (Optional) PancakeSwap, Chainlink, BSCScan, etc.

---

## 5. Build the Project

For production:

```bash
npm run build
```

---

## 6. Run the Application

### Development

```bash
npm run dev
```
- The dashboard will be available at [http://localhost:3000](http://localhost:3000)

### Production

```bash
npm run start
```
- For PM2, Docker, or cloud deployment, see below.

---

## 7. Docker Deployment (Optional)

Build and run with Docker:

```bash
docker build -t ocos-dashboard .
docker run -p 3000:3000 --env-file .env ocos-dashboard
```

---

## 8. Cloud Deployment

- **Vercel/Netlify:** Directly connect your repo and configure environment variables in the dashboard.
- **VPS/Cloud Server:** Use PM2 or Docker as above.
- **SSL/HTTPS:** For production, ensure HTTPS is enabled (via reverse proxy like NGINX or via cloud provider).

---

## 9. Continuous Integration / Continuous Deployment (CI/CD)

- Default GitHub Actions workflow is provided in `.github/workflows/`.
- Automated linting, testing, and deployment can be customized as needed.

---

## 10. Best Practices

- Never commit `.env` or secrets to version control.
- Monitor application health and uptime (e.g., with UptimeRobot).
- Keep dependencies updated and monitor for security advisories.
- Use HTTPS in all production environments.
- Backup critical data and configs.

---

## 11. Troubleshooting

- **Ports already in use:** Change the default port in your `.env` or start script.
- **API errors:** Double-check contract addresses and network endpoints.
- **Build failures:** Ensure Node.js version compatibility and run `npm install` again.

---

## 12. Additional Resources

- [Docker documentation](https://docs.docker.com/)
- [Vercel docs](https://vercel.com/docs)
- [PM2 docs](https://pm2.keymetrics.io/)
- [Next.js deployment](https://nextjs.org/docs/deployment)

---

> For questions or advanced deployment scenarios, please contact the OCOS team at [support@ocos.io](mailto:support@ocos.io).

