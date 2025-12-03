---
title: Custom Styling
index: 1
---

# Custom Styling

Customize the appearance of your Nextempura site.

## Theme System

Nextempura uses CSS variables for theming, making it easy to customize colors and styles.

### CSS Variables

Edit `styles/globals.scss` to modify theme variables:

```scss
:root {
  --foreground: rgb(0, 0, 0);
  --background: rgb(255, 255, 255);
  --primary: #3271ac;
  --border-color: rgb(215, 215, 215);
}
```

### Dark Mode

Dark mode variables are defined separately:

```scss
:root[data-theme="dark"] {
  --foreground: rgb(255, 255, 255);
  --background: rgb(10, 10, 10);
}
```

## Component Styling

### Using SCSS Modules

Components use SCSS modules for scoped styling:

```scss
// Component.module.scss
.container {
  padding: 1rem;
  background-color: var(--background);
}
```

```tsx
// Component.tsx
import styles from "./Component.module.scss";

export function Component() {
  return <div className={styles.container}>Content</div>;
}
```

## Typography

### Fonts

Nextempura uses Google Fonts:

- **Noto Sans** - English content
- **Noto Sans SC** - Chinese content

Change fonts in `app/[locale]/layout.tsx`.

## Colors

Customize the color palette by modifying CSS variables:

- `--primary`: Primary brand color
- `--foreground`: Main text color
- `--background`: Page background
- `--border-color`: Borders and dividers
