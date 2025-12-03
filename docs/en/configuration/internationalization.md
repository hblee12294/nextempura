---
title: Internationalization
index: 2
---

# Internationalization (i18n)

Nextempura has built-in support for multiple languages using next-intl.

## Supported Languages

Currently supported languages:

- English (en)
- Simplified Chinese (zh)

## Adding a New Language

### Step 1: Update Locale Configuration

Add your locale to `configs/locales.ts`:

```typescript
export const LOCALES: string[] = ["en", "zh", "fr"]; // Added French
```

### Step 2: Create Translation Files

Create a new JSON file in `locales/`:

```
locales/
├── en.json
├── zh.json
└── fr.json  # New file
```

### Step 3: Add Documentation

Create a new folder in `docs/`:

```
docs/
├── en/
├── zh/
└── fr/  # New language documentation
```

## Translation Best Practices

1. **Use Keys Consistently**: Keep the same structure across all locale files
2. **Parameterize Values**: Use variables for dynamic content
3. **Context Matters**: Provide context in key names

## Language Switching

Users can switch languages using the locale selector in the footer.
