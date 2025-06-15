
# Multi-language Support

## Overview

The OCOS Web3 Dashboard is built with global accessibility in mind and offers full multi-language support.  
Users can seamlessly switch between Azerbaijani (AZ), English (EN), and Turkish (TR) directly from the dashboard interface.  
All major dashboard modules, buttons, notifications, and popups are dynamically translated based on the selected language.

---

## How It Works

- **Language Selector:**  
  Available in the top navigation/header. Clicking allows users to choose their preferred language instantly.

- **Dynamic Translation Engine:**  
  The app uses an internationalization (i18n) library (e.g., `react-i18next`) to load language resources on demand.  
  All static text and key UI strings are stored in locale JSON files and updated without page reload.

- **Auto-detect Browser Language:**  
  On first visit, the app can automatically detect the user's browser language and set the default accordingly.

---

## File Structure

All translation files are located in the `/public/locales/` directory:

```
/public/locales/
  /az/translation.json      # Azerbaijani translations
  /en/translation.json      # English translations
  /tr/translation.json      # Turkish translations
```

**Example: `public/locales/en/translation.json`**
```json
{
  "dashboard": "Dashboard",
  "connect_wallet": "Connect Wallet",
  "staking": "Staking",
  "airdrop": "Airdrop",
  "liquidity": "Liquidity"
}
```

---

## Adding New Languages

To add a new language:

1. Create a new folder under `/public/locales/`, e.g., `/ru/` for Russian.
2. Copy `translation.json` from another language as a template.
3. Translate each string value to the new language.
4. Update the language selector options in the UI.

---

## Best Practices

- Use short, clear text keys for all UI elements.
- Never hardcode user-facing strings in components—always use translation functions.
- Regularly review translation files to keep them up to date with UI changes.
- Encourage community contributions for localization improvements and new languages.

---

## Example Usage in React

```js
import { useTranslation } from 'react-i18next';

function StakingComponent() {
  const { t } = useTranslation();
  return <button>{t('staking')}</button>;
}
```

---

## Community & Contributions

Community contributions for translations are highly encouraged!  
If you spot an error or want to add a new language, simply submit a pull request with your updated `translation.json` file.

---

## Troubleshooting

- **Language not changing:**  
  Make sure translation files are present and formatted correctly in `/public/locales/`.
- **Missing translation keys:**  
  The app will fallback to English or display the key if a translation is missing. Regularly review translation coverage.

---

_**Empowering global participation: OCOS speaks your language!**_
