# Contribution Tips

Welcome to the OCOS Web3 Dashboard developer community!  
This document provides detailed best practices and tips for anyone who wants to contribute code, documentation, or ideas to the project.

---

## 🚀 Before You Start

- **Explore the Repo:** Familiarize yourself with the codebase, project structure, and documentation under `/docs/`.
- **Read the Docs:** Check `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md` for standards and community rules.
- **Install Dependencies:** Run `npm install` and ensure your environment is set up as described in `/docs/deployment/environment-config.md`.

---

## 🏷️ Issues & Planning

- **Search First:** Look for existing issues or discussions before opening a new one.
- **Descriptive Issues:** When submitting bugs or features, use clear titles and provide steps, screenshots, or logs if relevant.
- **Labels:** Use and respect issue labels (`bug`, `feature`, `question`, etc.).

---

## 🔀 Branching & Commits

- **Branch Strategy:**  
  - Use feature branches (`feature/staking-module`), bugfix branches (`bugfix/wallet-connect`), or hotfix branches as needed.
  - Keep your branch updated with the latest `main` branch.
- **Atomic Commits:**  
  - Each commit should focus on a single logical change.
  - Use clear, present-tense messages (`Add staking module`, `Fix chart loading bug`).
  - Reference issues/PRs where relevant (e.g., `Fixes #42`).

---

## 🧑‍💻 Coding Standards

- **Language:** All code and documentation should be in English.
- **Lint & Format:**  
  - Use Prettier and ESLint (`npm run lint`, `npm run format`).
  - Write readable, well-commented, and modular code.
- **Testing:**  
  - Write or update tests for any new features or bugfixes.
  - Use unit and integration tests where possible.
  - Run all tests before pushing (`npm run test`).

---

## 📚 Documentation

- **Update Docs:** Update `/docs/` and code comments for any new features, breaking changes, or configurations.
- **Usage Examples:** Where possible, add code snippets or screenshots to demonstrate usage.

---

## 📝 Pull Requests (PR)

- **Descriptive PRs:** Clearly describe what your PR changes, why it’s needed, and reference related issues.
- **Small Scope:** PRs should be focused. Large changes should be broken up if possible.
- **Checklist:**  
  - Code builds and tests pass
  - No linting errors
  - Docs are up-to-date

---

## 🛡️ Security & Privacy

- **Sensitive Data:** Never hardcode or expose API keys, mnemonics, or private data in PRs.
- **Responsible Disclosure:** Report security issues privately (see `/docs/security/responsible-disclosure.md`).

---

## 🙌 Communication

- **Feedback:** Be open to feedback, reviews, and suggestions from other contributors and maintainers.
- **Respect:** Always communicate respectfully, following the Code of Conduct.

---

## 🏆 Contributor Recognition

- Your contributions (code, docs, ideas) will be credited in release notes and the contributors list.
- Outstanding contributors may be invited as project maintainers.

---

Thank you for helping make OCOS Web3 Dashboard better!  
We value every contribution—no matter the size or type.

—
_OCOS Core Team_
