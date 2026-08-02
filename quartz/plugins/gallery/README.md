# Gallery 相册插件（本地插件）

让 Quartz 里的 markdown 文件变成瀑布流相册。

## 用法

在任何 `.md` 文件的 frontmatter 里加 `gallery: true`，正文用标准 markdown 图片语法列照片：

```markdown
---
title: 我的相册
gallery: true
---

![2026年夏·深圳湾](https://oss.example.com/photos/photo1.jpg)
![海边日落](https://oss.example.com/photos/photo2.jpg)
```

构建后：
- 页面图片自动渲染成瀑布流（竖图高、横图矮，JS 自适应列数）
- 点击图片打开 lightbox 看原图，支持 ← → 键翻页、Esc 关闭
- 图片懒加载

## 文件结构

```
quartz/plugins/gallery/
├── index.ts       # 插件主体（transformer）
└── package.json   # 插件 manifest（category: transformer）
```

## 配置

已在 `quartz.config.yaml` 注册：

```yaml
plugins:
  - source: ./quartz/plugins/gallery
    enabled: true
    order: 55
```

## 实现原理

- 插件是 `QuartzTransformerPlugin`，在 `htmlPlugins`（rehype）阶段运行
- 检测 frontmatter `gallery: true` 的页面
- 收集正文所有 `<img>`，从原段落中移除，包进 `.gallery-masonry` 容器
- 通过 `externalResources` 注入瀑布流布局 + lightbox 的 CSS/JS
- 瀑布流不预知图片宽高：JS 在图片加载后按 naturalWidth/naturalHeight 重新布局，实现自适应

## 注意

- 插件依赖 `unist-util-visit`（已在 Quartz package.json 依赖里）
- 图片源为外部 URL（如 OSS）时无需额外处理；本地图片需放在 content 可访问路径
- 与内容边界一致：插件只负责渲染，照片选择/编辑权在 md 文件本身
