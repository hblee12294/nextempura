---
title: Writing Documentation
index: 1
---

# Writing Documentation

Learn how to create and organize content in Nextempura.

## Markdown Basics

Nextempura uses GitHub Flavored Markdown (GFM) with additional features.

### Headings

```markdown
# H1 Heading

## H2 Heading

### H3 Heading
```

### Text Formatting

```markdown
**Bold text**
_Italic text_
~~Strikethrough~~
`Inline code`
```

### Lists

Unordered lists:

```markdown
- Item 1
- Item 2
  - Nested item
```

Ordered lists:

```markdown
1. First item
2. Second item
3. Third item
```

## Code Blocks

Use triple backticks with language specification:

````markdown
```javascript
function hello() {
  console.log("Hello, World!");
}
```
````

## Frontmatter

Every markdown file should include frontmatter:

```yaml
---
title: Page Title
index: 1
---
```

### Frontmatter Fields

- `title`: Display title (required)
- `index`: Sort order in navigation (optional)

## Best Practices

1. **Use descriptive headings**: Help readers scan content
2. **Keep paragraphs short**: Improve readability
3. **Include code examples**: Show, don't just tell
4. **Link related topics**: Help users discover more content
