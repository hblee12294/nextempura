---
title: 编写文档
index: 1
---

# 编写文档

了解如何在 Nextempura 中创建和组织内容。

## Markdown 基础

Nextempura 使用 GitHub 风格的 Markdown (GFM) 及其他功能。

### 标题

```markdown
# H1 标题

## H2 标题

### H3 标题
```

### 文本格式

```markdown
**粗体文本**
_斜体文本_
~~删除线~~
`行内代码`
```

### 列表

无序列表：

```markdown
- 项目 1
- 项目 2
  - 嵌套项目
```

有序列表：

```markdown
1. 第一项
2. 第二项
3. 第三项
```

## 代码块

使用三个反引号和语言标识：

````markdown
```javascript
function hello() {
  console.log("你好，世界！");
}
```
````

## Frontmatter

每个 markdown 文件都应包含 frontmatter：

```yaml
---
title: 页面标题
index: 1
---
```

### Frontmatter 字段

- `title`：显示标题（必需）
- `index`：导航中的排序顺序（可选）

## 最佳实践

1. **使用描述性标题**：帮助读者浏览内容
2. **保持段落简短**：提高可读性
3. **包含代码示例**：展示，而不仅仅是叙述
4. **链接相关主题**：帮助用户发现更多内容
