---
title: 自定义样式
index: 1
---

# 自定义样式

自定义您的 Nextempura 网站外观。

## 主题系统

Nextempura 使用 CSS 变量进行主题设置，使自定义颜色和样式变得容易。

### CSS 变量

编辑 `styles/globals.scss` 以修改主题变量：

```scss
:root {
  --foreground: rgb(0, 0, 0);
  --background: rgb(255, 255, 255);
  --primary: #3271ac;
  --border-color: rgb(215, 215, 215);
}
```

### 深色模式

深色模式变量单独定义：

```scss
:root[data-theme="dark"] {
  --foreground: rgb(255, 255, 255);
  --background: rgb(10, 10, 10);
}
```

## 组件样式

### 使用 SCSS 模块

组件使用 SCSS 模块进行作用域样式：

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
  return <div className={styles.container}>内容</div>;
}
```

## 字体排版

### 字体

Nextempura 使用 Google Fonts：

- **Noto Sans** - 英文内容
- **Noto Sans SC** - 中文内容

在 `app/[locale]/layout.tsx` 中更改字体。

## 颜色

通过修改 CSS 变量自定义调色板：

- `--primary`：主品牌颜色
- `--foreground`：主文本颜色
- `--background`：页面背景
- `--border-color`：边框和分隔线
