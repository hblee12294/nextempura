---
title: 组织内容
index: 2
---

# 组织内容

适当的组织使您的文档更容易导航和维护。

## 文件夹结构

按主题组织文档：

```
docs/zh/
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

## 导航层次结构

文件夹结构决定导航：

- **文件夹** = 导航部分
- **文件** = 单个页面
- **index.md** = 部分概述页面

## 内容排序

在 frontmatter 中使用 `index` 字段控制顺序：

```yaml
---
title: 第一页
index: 1
---
```

较小的数字在导航中首先出现。

## 命名约定

### 文件

- 使用小写
- 空格使用连字符：`my-page.md`
- 具有描述性：`installation.md` 而不是 `install.md`

### 文件夹

- 使用单数名词：`configuration/` 而不是 `configurations/`
- 将相关内容分组在一起
- 限制嵌套为 2-3 级

## 提示

- 从清晰的层次结构开始
- 将相关内容保持在一起
- 使用描述性的文件和文件夹名称
- 避免深度嵌套 - 保持简单
