import { QuartzTransformerPlugin } from '@quartz-community/types';

/**
 * Gallery Plugin — 让 markdown 文件变成瀑布流相册。
 *
 * 用法：在任意 md 文件的 frontmatter 里加 `gallery: true`，
 * 正文中用标准 markdown 图片语法列照片：
 *
 *   ![标题文字](https://example.com/photo.jpg)
 *
 * 构建时插件会把页面里的图片包装成瀑布流容器，并注入
 * lightbox（点击放大、键盘翻页）所需的 JS/CSS。
 */
declare const Gallery: QuartzTransformerPlugin;

export { Gallery };
