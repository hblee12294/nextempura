---
title: Organizing Content
index: 2
---

# Organizing Content

Proper organization makes your documentation easier to navigate and maintain.

## Folder Structure

Organize documentation by topic:

```
docs/en/
├── getting-started/
│   ├── introduction.md
│   └── structure.md
├── configuration/
│   ├── overview.md
│   └── internationalization.md
└── content/
    ├── writing-docs.md
    └── organizing.md
```

## Navigation Hierarchy

The folder structure determines the navigation:

- **Folders** = Navigation sections
- **Files** = Individual pages
- **index.md** = Section overview page

## Ordering Content

Use the `index` field in frontmatter to control order:

```yaml
---
title: First Page
index: 1
---
```

Lower numbers appear first in navigation.

## Naming Conventions

### Files

- Use lowercase
- Use hyphens for spaces: `my-page.md`
- Be descriptive: `installation.md` not `install.md`

### Folders

- Use singular nouns: `configuration/` not `configurations/`
- Group related content together
- Limit nesting to 2-3 levels

## Tips

- Start with a clear hierarchy in mind
- Keep related content together
- Use descriptive file and folder names
- Avoid deep nesting - keep it simple
