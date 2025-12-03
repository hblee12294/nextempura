---
title: 配置
index: 1
---

# 配置概述

了解如何配置 Nextempura 以满足您的需求。

## 配置文件

### next.config.mjs

主要的 Next.js 配置文件控制：

- 构建优化
- 图片优化
- 国际化设置
- 自定义 webpack 配置

```javascript
const nextConfig = {
  // 您的配置在这里
};

export default nextConfig;
```

## 环境变量

创建 `.env.local` 文件以设置特定于环境的设置：

```bash
# 示例环境变量
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

## 自定义选项

### 主题配置

在 `styles/globals.scss` 中修改主题：

- 配色方案
- 字体排版
- 间距
- 断点

### 导航

编辑 `configs/navs.ts` 以自定义主导航菜单。

## 高级配置

有关高级自定义，请参阅：

- [Next.js 配置文档](https://nextjs.org/docs/app/api-reference/next-config-js)
- [自定义样式指南](/docs/customization/styling)
