---
title: 项目结构
index: 2
---

# 项目结构

了解项目结构将帮助您有效地导航和自定义 Nextempura。

## 目录概述

```
nextempura/
├── app/                    # Next.js 应用目录
│   ├── [locale]/          # 基于区域设置的路由
│   │   ├── docs/          # 文档页面
│   │   └── layout.tsx     # 根布局
├── components/            # React 组件
├── docs/                  # Markdown 文档文件
│   ├── en/               # 英文文档
│   └── zh/               # 中文文档
├── styles/               # 全局样式
└── utils/                # 工具函数
```

## 关键目录

### App 目录

`app/` 目录包含使用 App Router 的所有 Next.js 页面和布局。

### 组件

可重用的 React 组件存储在 `components/` 目录中：

- `Header.tsx` - 带导航的网站头部
- `SideNav.tsx` - 文档侧边栏
- `TableOfContents.tsx` - 页面内目录

### 文档文件

所有 markdown 文件存储在 `docs/[locale]/` 中：

- 按主题组织
- 支持 frontmatter 元数据
- 基于文件结构自动路由

## 文件命名约定

- 使用小写加连字符：`getting-started.md`
- 索引文件：文件夹概述使用 `index.md`
- 需要 frontmatter 以正确导航
