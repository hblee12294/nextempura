# Nextempura 🍤

> A modern, feature-rich documentation site template built with Next.js 14

Nextempura is a beautifully designed documentation template featuring internationalization, markdown-based content, and a smooth user experience. Perfect for building documentation sites, technical blogs, or knowledge bases.

## ✨ Features

- 🌍 **Internationalization (i18n)** - Built-in support for multiple languages with next-intl
- 📝 **Markdown Documentation** - Write content in markdown with GitHub Flavored Markdown support
- 🎨 **Modern UI** - Mintlify-inspired design with smooth animations and blob graphics
- 🌓 **Dark Mode** - Automatic theme switching with system preference support
- 📱 **Responsive** - Mobile-first design that works on all devices
- 🔍 **Table of Contents** - Automatic "On this page" navigation with scroll-based highlighting
- ⚡ **Fast** - Built on Next.js 14 with App Router for optimal performance
- 🎯 **Type-safe** - Full TypeScript support
- 🎭 **SCSS Modules** - Scoped styling with CSS variables for easy theming

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- pnpm (recommended), npm, or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/hblee12294/nextempura.git
cd nextempura
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
nextempura/
├── app/                    # Next.js App Router
│   └── [locale]/          # Locale-based routing
│       ├── docs/          # Documentation pages
│       └── layout.tsx     # Root layout with theme provider
├── components/            # React components
│   ├── Header.tsx         # Site header with navigation
│   ├── SideNav.tsx        # Documentation sidebar
│   ├── TableOfContents.tsx # On-page TOC with active states
│   └── ...
├── docs/                  # Markdown documentation
│   ├── en/               # English docs
│   └── zh/               # Chinese docs
├── locales/              # Translation files
│   ├── en.json
│   └── zh.json
├── styles/               # Global styles and CSS variables
└── utils/                # Utility functions
    ├── docs.ts           # Documentation tree builder
    └── markdown.ts       # Markdown processing
```

## 📚 Documentation

### Adding Content

1. Create markdown files in `docs/[locale]/`:

```markdown
---
title: Your Page Title
index: 1
---

# Your Page Title

Your content here...
```

2. Organize by folders - the folder structure determines navigation:

```
docs/en/
├── getting-started/
│   ├── introduction.md
│   └── installation.md
└── guides/
    └── tutorial.md
```

3. Translations are automatically loaded based on the locale

### Customization

#### Theme Colors

Edit `styles/globals.scss`:

```scss
:root {
  --primary: #3271ac;
  --accent-red-hex: #e45064;
  --accent-blue-hex: #3271ac;
  // ... more colors
}
```

#### Navigation

Update `configs/navs.ts` for main navigation items.

Product cards on the docs landing page are automatically generated from the `docs/[locale]/` folder structure.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [SCSS Modules](https://sass-lang.com/) with CSS Variables
- **i18n**: [next-intl](https://next-intl-docs.vercel.app/)
- **Markdown**: [unified](https://unifiedjs.com/) + [remark](https://remark.js.org/) + [rehype](https://rehype.js.org/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Code Highlighting**: [rehype-highlight](https://github.com/rehypejs/rehype-highlight)

## 🌐 Internationalization

Currently supported languages:

- 🇺🇸 English (`en`)
- 🇨🇳 Simplified Chinese (`zh`)

To add a new language:

1. Add locale to `configs/locales.ts`
2. Create translation file in `locales/[locale].json`
3. Add documentation folder `docs/[locale]/`

## 🎨 Design Philosophy

Nextempura is inspired by modern documentation sites like Mintlify and Vercel, focusing on:

- **Clean aesthetics** - Minimalist design with purposeful animations
- **Developer experience** - Easy to customize and extend
- **Content first** - Design enhances, doesn't distract from content
- **Accessibility** - Respects user preferences (motion, color scheme)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/hblee12294/nextempura/issues).

## 👤 Author

**Hblee**

- GitHub: [@hblee12294](https://github.com/hblee12294)
- Email: hblee12294@gmail.com
- Website: [hongbinli.com](https://hongbinli.com)

---

<p align="center">Made with ❤️ and Next.js</p>
