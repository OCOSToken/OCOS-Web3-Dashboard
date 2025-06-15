# OCOS Web3 Dashboard – Developer Style Guide

## Overview

This style guide ensures that all OCOS Web3 Dashboard contributors follow consistent, professional, and scalable coding practices. Adhering to these standards improves code quality, readability, maintainability, and collaboration across the team.

---

## 1. **General Principles**

- Write clean, readable, and modular code.
- Prioritize clarity over cleverness.
- Use meaningful variable, function, and component names.
- Avoid large, monolithic files; break logic into reusable modules.
- Always write documentation and comments for non-obvious code.

---

## 2. **Project Structure**

```
/src
  /components      # Reusable UI elements (Button, Modal, etc.)
  /pages           # Page-level components (Home, Dashboard, Staking)
  /hooks           # Custom React hooks (useWallet, useFetch, etc.)
  /utils           # Utility/helper functions (format, validate, etc.)
  /contracts       # Contract ABIs and addresses
  /styles          # Global styles and theme config
  /context         # React context providers
/public
  /locales         # Multi-language support files (az, en, tr)
```

---

## 3. **Language, Framework & Tools**

- **Language:** JavaScript (ES6+), TypeScript for all new code
- **Framework:** React.js (preferably with Next.js)
- **Styling:** Tailwind CSS or Chakra UI for UI components
- **State:** React Context, Redux, or Zustand for global state
- **Linting:** [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) must be enabled and pass on all code
- **Testing:** Jest, React Testing Library for unit/integration tests

---

## 4. **Naming Conventions**

- **Variables/functions:** `camelCase` (e.g., `walletAddress`)
- **Components:** `PascalCase` (e.g., `WalletConnectButton`)
- **Files:** `kebab-case.js` or `kebab-case.tsx` (e.g., `wallet-connect-button.tsx`)
- **Constants:** `UPPER_SNAKE_CASE`

---

## 5. **Component Guidelines**

- All components must be functional (not class-based)
- Components must be modular and reusable where possible
- Each component gets its own file/folder if complex
- Use PropTypes or TypeScript interfaces for props
- Keep components presentational; use hooks for logic

---

## 6. **Hooks & Utilities**

- Use custom hooks for repeated logic (naming: `useSomething`)
- Keep hooks pure and avoid side effects outside `useEffect`
- Utility functions live in `/utils/`, should be pure and reusable

---

## 7. **Styling & UI**

- Prefer Tailwind utility classes or Chakra components
- No inline CSS unless necessary
- Use theme tokens for color, font, spacing
- Keep styles consistent, responsive, and accessible (ARIA labels)

---

## 8. **Smart Contract Integration**

- Store ABIs and addresses in `/contracts/`
- Use Ethers.js or Web3.js for blockchain interactions
- Handle chain/network errors gracefully and display user-friendly messages
- Never expose private keys or sensitive secrets

---

## 9. **Internationalization**

- All user-facing text must be translation-ready (i18n)
- Use `/public/locales/` for translation files
- Avoid hard-coded strings in components

---

## 10. **Code Comments & Documentation**

- Write comments for complex logic or decisions
- Use JSDoc/TypeDoc for all exported functions and components
- Update relevant docs in `/docs/` on any API or logic change

---

## 11. **Git & Collaboration**

- Create feature branches (`feature/xyz`) or fix branches (`fix/bug-abc`)
- Write clear, meaningful commit messages (imperative mood)
- Rebase and resolve conflicts before PRs
- All code must pass lint, build, and tests before merging
- Use Pull Request templates and fill out all sections

---

## 12. **Testing**

- All logic-heavy modules and hooks require tests
- Write tests for critical user flows and API interactions
- Run tests before pushing or submitting a PR

---

## 13. **Security Best Practices**

- Never store secrets or keys in the repo
- Validate all user input on both client and server sides
- Use up-to-date dependencies and check for vulnerabilities

---

## 14. **Accessibility**

- Ensure all interactive elements are keyboard accessible
- Use semantic HTML elements
- Provide alt text for all images and ARIA roles where needed

---

## 15. **Review & Approval**

- All code is peer-reviewed before merge
- Address all code review feedback and suggestions
- Documentation and tests must be updated in the same PR

---

## References

- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [React Docs – Component Conventions](https://react.dev/learn/component-conventions)
- [W3C Accessibility Standards](https://www.w3.org/WAI/standards-guidelines/)
- [OpenZeppelin Solidity Best Practices](https://docs.openzeppelin.com/)

---

**Keep OCOS codebase clean, consistent, and secure!**
