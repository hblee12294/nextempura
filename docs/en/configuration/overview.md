---
title: Configuration
index: 1
---

# Configuration Overview

Learn how to configure Nextempura to match your needs.

## Configuration Files

### next.config.mjs

The main Next.js configuration file controls:

- Build optimization
- Image optimization
- Internationalization settings
- Custom webpack configuration

```javascript
const nextConfig = {
  // Your configuration here
};

export default nextConfig;
```

## Environment Variables

Create a `.env.local` file for environment-specific settings:

```bash
# Example environment variables
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

## Customization Options

### Theme Configuration

Modify the theme in `styles/globals.scss`:

- Color schemes
- Typography
- Spacing
- Breakpoints

### Navigation

Edit `configs/navs.ts` to customize the main navigation menu.

## Advanced Configuration

For advanced customization, refer to:

- [Next.js Configuration Docs](https://nextjs.org/docs/app/api-reference/next-config-js)
- [Custom Styling Guide](/docs/customization/styling)
