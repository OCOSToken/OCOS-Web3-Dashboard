
# CI/CD Pipeline for OCOS Web3 Dashboard

## Overview

A robust CI/CD (Continuous Integration and Continuous Deployment) pipeline ensures every code change is automatically built, tested, and deployed with maximum reliability and minimum manual intervention.  
OCOS Web3 Dashboard utilizes GitHub Actions for seamless, automated DevOps.

---

## Pipeline Stages

### 1. **Continuous Integration (CI)**

- **Trigger:** On every push or pull request to `main` or feature branches
- **Steps:**
  - Checkout code
  - Install dependencies (`npm ci`)
  - Lint code (`npm run lint`)
  - Run tests (`npm run test`)
  - Build project (`npm run build`)
- **Artifacts:** Build outputs, coverage reports

### 2. **Continuous Deployment (CD)**

- **Trigger:** After successful CI on `main` (and optionally, on tagged releases)
- **Steps:**
  - Deploy build to staging (optional)
  - Deploy build to production server (Vercel, Netlify, AWS, or your custom VPS)
  - Invalidate CDN/cache if needed
  - Notify via Slack/Telegram

---

## Example: GitHub Actions Workflow

Create `.github/workflows/ci-cd.yml` in your repo:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main, develop, feature/** ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20.x'

      - name: Install dependencies
        run: npm ci

      - name: Lint code
        run: npm run lint

      - name: Run tests
        run: npm run test

      - name: Build project
        run: npm run build

  deploy:
    needs: build-and-test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20.x'

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          working-directory: ./
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
```

---

## Best Practices

- **Use secrets:** Store deployment keys/tokens in GitHub Secrets, never commit them.
- **Branch protection:** Require CI to pass before merging to `main`.
- **Automatic rollback:** Configure deployment platform to auto-rollback on failure.
- **Notifications:** Integrate with Slack/Telegram for pipeline status.
- **Staging environment:** Test deployments before going to production.
- **Artifacts:** Keep test coverage and build artifacts for debugging.
- **Manual approvals:** Optionally require manual approval for production deploys.

---

## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Node.js GitHub Actions](https://github.com/actions/setup-node)
- [Slack Notifications for GitHub Actions](https://github.com/marketplace/actions/slack-notify)

---

## Maintainers

For pipeline or deployment issues, contact [info@ocos.io](mailto:info@ocos.io) or open an Issue in the repository.

