import type { QuartzTransformerPlugin } from "@quartz-community/types"
import type { Root } from "hast"
import { visit } from "unist-util-visit"

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
export const Gallery: QuartzTransformerPlugin = () => {
  return {
    name: "Quartz:Gallery",
    markdownPlugins() {
      return []
    },
    htmlPlugins() {
      return [
        () => (tree: Root, file: any) => {
          const frontmatter = file?.data?.frontmatter ?? {}
          if (!frontmatter.gallery) return

          const images: any[] = []
          visit(tree, "element", (node: any) => {
            if (node.tagName === "img") {
              images.push(node)
            }
          })

          if (images.length === 0) return

          // 把页面 body 里的所有图片收集起来，替换为瀑布流容器
          const container = {
            type: "element",
            tagName: "div",
            properties: { className: ["gallery-masonry"] },
            children: images.map((img, idx) => ({
              type: "element",
              tagName: "a",
              properties: {
                className: ["gallery-item"],
                href: img.properties?.src || "#",
                "data-idx": String(idx),
              },
              children: [
                {
                  ...img,
                  properties: {
                    ...(img.properties || {}),
                    loading: "lazy",
                  },
                },
              ],
            })),
          }

          // 从树里移除所有包含 img 的元素（通常是 <p><img></p>）
          const toRemove: any[] = []
          visit(tree, "element", (node: any, _index: number | undefined, parent: any) => {
            if (parent && node.tagName !== "gallery-masonry") {
              const hasImg = (n: any): boolean => {
                if (!n || typeof n !== "object") return false
                if (n.tagName === "img") return true
                return Array.isArray(n.children) && n.children.some(hasImg)
              }
              if (hasImg(node)) toRemove.push({ node, parent })
            }
          })
          for (const { node, parent } of toRemove) {
            const i = parent.children.indexOf(node)
            if (i >= 0) parent.children.splice(i, 1)
          }

          // 把容器插到正文最前面
          ;(tree.children as any[]).unshift(container)
        },
      ]
    },
    externalResources() {
      return {
        css: [
          {
            contentType: "inline",
            content: `
.gallery-masonry {
  position: relative;
  width: 100%;
}
.gallery-item {
  position: absolute;
  overflow: hidden;
  border-radius: 6px;
  display: block;
  text-decoration: none;
  border: none;
}
.gallery-item .external-icon { display: none; }
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  cursor: zoom-in;
  transition: transform 0.25s ease;
}
.gallery-item:hover img { transform: scale(1.03); }
#gallery-lightbox {
  position: fixed; inset: 0; background: rgba(0,0,0,0.92);
  display: none; align-items: center; justify-content: center;
  z-index: 1000; flex-direction: column; padding: 2rem;
}
#gallery-lightbox.open { display: flex; }
#gallery-lightbox img {
  max-width: 92vw; max-height: 80vh; object-fit: contain;
  border-radius: 4px;
}
#gallery-lightbox .lb-meta {
  margin-top: 1rem; color: #ddd; text-align: center;
  font-size: 0.9rem; max-width: 92vw;
}
#gallery-lightbox .lb-close {
  position: absolute; top: 1rem; right: 1.5rem;
  background: none; border: none; color: #fff;
  font-size: 2rem; cursor: pointer; line-height: 1;
}
#gallery-lightbox .lb-prev, #gallery-lightbox .lb-next {
  position: absolute; top: 50%; transform: translateY(-50%);
  background: rgba(255,255,255,0.1); border: none; color: #fff;
  font-size: 2rem; padding: 0.5rem 1rem; cursor: pointer; border-radius: 6px;
}
#gallery-lightbox .lb-prev { left: 1rem; }
#gallery-lightbox .lb-next { right: 1rem; }
@media (max-width: 600px) {
  #gallery-lightbox .lb-prev, #gallery-lightbox .lb-next { font-size: 1.4rem; }
}
`,
          },
        ],
        js: [
          {
            loadTime: "afterDOMReady",
            contentType: "inline",
            script: `
(function() {
  function layoutMasonry() {
    var wrap = document.querySelector('.gallery-masonry');
    if (!wrap) return;
    var items = Array.prototype.slice.call(wrap.querySelectorAll('.gallery-item'));
    if (items.length === 0) return;
    var gap = 10;
    var w = wrap.clientWidth;
    var cols = w < 480 ? 2 : (w < 800 ? 3 : 4);
    var colW = (w - gap * (cols - 1)) / cols;
    var heights = new Array(cols).fill(0);
    items.forEach(function(item) {
      var img = item.querySelector('img');
      var minIdx = 0;
      for (var i = 1; i < cols; i++) if (heights[i] < heights[minIdx]) minIdx = i;
      item.style.position = 'absolute';
      item.style.left = (minIdx * (colW + gap)) + 'px';
      item.style.top = heights[minIdx] + 'px';
      item.style.width = colW + 'px';
      item.style.overflow = 'hidden';
      item.style.display = 'block';
      item.style.borderRadius = '6px';
      var h = colW; // 默认正方形，图片加载后按比例修正
      if (img && img.naturalWidth > 0) {
        h = colW * (img.naturalHeight / img.naturalWidth);
      } else if (img && img.complete && img.naturalWidth === 0) {
        img.addEventListener('load', function() { layoutMasonry(); });
      }
      item.style.height = h + 'px';
      heights[minIdx] += h + gap;
    });
    wrap.style.position = 'relative';
    wrap.style.height = (Math.max.apply(null, heights) - gap) + 'px';
  }

  // lightbox
  var lb = document.createElement('div');
  lb.id = 'gallery-lightbox';
  lb.innerHTML = '<button class="lb-close">×</button>' +
    '<button class="lb-prev">‹</button>' +
    '<img alt=""><div class="lb-meta"></div>' +
    '<button class="lb-next">›</button>';
  document.body.appendChild(lb);
  var lbImg = lb.querySelector('img');
  var lbMeta = lb.querySelector('.lb-meta');
  var lbClose = lb.querySelector('.lb-close');
  var lbPrev = lb.querySelector('.lb-prev');
  var lbNext = lb.querySelector('.lb-next');
  var cur = 0, items = [];

  function show(i) {
    if (items.length === 0) return;
    if (i < 0) i = items.length - 1;
    if (i >= items.length) i = 0;
    cur = i;
    var img = items[i].querySelector('img');
    lbImg.src = img.src;
    lbMeta.textContent = img.alt || '';
    lb.classList.add('open');
  }
  function close() { lb.classList.remove('open'); }
  lbClose.addEventListener('click', close);
  lbPrev.addEventListener('click', function(e) { e.stopPropagation(); show(cur - 1); });
  lbNext.addEventListener('click', function(e) { e.stopPropagation(); show(cur + 1); });
  lb.addEventListener('click', function(e) { if (e.target === lb) close(); });
  document.addEventListener('keydown', function(e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(cur - 1);
    if (e.key === 'ArrowRight') show(cur + 1);
  });

  function init() {
    var wrap = document.querySelector('.gallery-masonry');
    if (!wrap) return;
    items = Array.prototype.slice.call(wrap.querySelectorAll('.gallery-item'));
    items.forEach(function(item, idx) {
      // 清理 crawl-links 给外链加的 target/_blank 和 external 图标
      item.removeAttribute('target');
      var svg = item.querySelector('svg.external-icon');
      if (svg) svg.remove();
      item.addEventListener('click', function(e) {
        e.preventDefault();
        show(idx);
      });
    });
    layoutMasonry();
    window.addEventListener('resize', function() {
      clearTimeout(window.__galleryResize);
      window.__galleryResize = setTimeout(layoutMasonry, 150);
    });
    // 图片加载完后重新布局（自然高度）
    var imgs = wrap.querySelectorAll('img');
    var pending = imgs.length;
    if (pending === 0) return;
    imgs.forEach(function(img) {
      if (img.complete && img.naturalWidth > 0) {
        pending--;
        if (pending === 0) layoutMasonry();
      } else {
        img.addEventListener('load', function() {
          pending--;
          if (pending === 0) layoutMasonry();
        });
        img.addEventListener('error', function() {
          pending--;
          if (pending === 0) layoutMasonry();
        });
      }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
`,
          },
        ],
      }
    },
  }
}
