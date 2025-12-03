---
title: Project Structure
index: 2
---

# Project Structure

Understanding the project structure will help you navigate and customize Nextempura effectively.

## Directory Overview

```
nextempura/
├── app/                    # Next.js app directory
│   ├── [locale]/          # Locale-based routing
│   │   ├── docs/          # Documentation pages
│   │   └── layout.tsx     # Root layout
├── components/            # React components
├── docs/                  # Markdown documentation files
│   ├── en/               # English documentation
│   └── zh/               # Chinese documentation
├── styles/               # Global styles
└── utils/                # Utility functions
```

## Key Directories

### App Directory

The `app/` directory contains all your Next.js pages and layouts using the App Router.

### Components

Reusable React components are stored in the `components/` directory:

- `Header.tsx` - Site header with navigation
- `SideNav.tsx` - Documentation sidebar
- `TableOfContents.tsx` - On-page TOC

### Documentation Files

All markdown files are stored in `docs/[locale]/`:

- Organized by topic
- Supports frontmatter metadata
- Automatic routing based on file structure

## File Naming Conventions

- Use lowercase with hyphens: `getting-started.md`
- Index files: `index.md` for folder overviews
- Frontmatter required for proper navigation
