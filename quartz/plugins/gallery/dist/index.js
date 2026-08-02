// node_modules/unist-util-is/lib/index.js
var convert = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  (function(test) {
    if (test === null || test === void 0) {
      return ok;
    }
    if (typeof test === "function") {
      return castFactory(test);
    }
    if (typeof test === "object") {
      return Array.isArray(test) ? anyFactory(test) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        propertiesFactory(
          /** @type {Props} */
          test
        )
      );
    }
    if (typeof test === "string") {
      return typeFactory(test);
    }
    throw new Error("Expected function, string, or object as test");
  })
);
function anyFactory(tests) {
  const checks = [];
  let index = -1;
  while (++index < tests.length) {
    checks[index] = convert(tests[index]);
  }
  return castFactory(any);
  function any(...parameters) {
    let index2 = -1;
    while (++index2 < checks.length) {
      if (checks[index2].apply(this, parameters)) return true;
    }
    return false;
  }
}
function propertiesFactory(check) {
  const checkAsRecord = (
    /** @type {Record<string, unknown>} */
    check
  );
  return castFactory(all);
  function all(node) {
    const nodeAsRecord = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      node
    );
    let key;
    for (key in check) {
      if (nodeAsRecord[key] !== checkAsRecord[key]) return false;
    }
    return true;
  }
}
function typeFactory(check) {
  return castFactory(type);
  function type(node) {
    return node && node.type === check;
  }
}
function castFactory(testFunction) {
  return check;
  function check(value, index, parent) {
    return Boolean(
      looksLikeANode(value) && testFunction.call(
        this,
        value,
        typeof index === "number" ? index : void 0,
        parent || void 0
      )
    );
  }
}
function ok() {
  return true;
}
function looksLikeANode(value) {
  return value !== null && typeof value === "object" && "type" in value;
}

// node_modules/unist-util-visit-parents/lib/color.node.js
function color(d) {
  return "\x1B[33m" + d + "\x1B[39m";
}

// node_modules/unist-util-visit-parents/lib/index.js
var empty = [];
var CONTINUE = true;
var EXIT = false;
var SKIP = "skip";
function visitParents(tree, test, visitor, reverse) {
  let check;
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
  } else {
    check = test;
  }
  const is2 = convert(check);
  const step = reverse ? -1 : 1;
  factory(tree, void 0, [])();
  function factory(node, index, parents) {
    const value = (
      /** @type {Record<string, unknown>} */
      node && typeof node === "object" ? node : {}
    );
    if (typeof value.type === "string") {
      const name = (
        // `hast`
        typeof value.tagName === "string" ? value.tagName : (
          // `xast`
          typeof value.name === "string" ? value.name : void 0
        )
      );
      Object.defineProperty(visit2, "name", {
        value: "node (" + color(node.type + (name ? "<" + name + ">" : "")) + ")"
      });
    }
    return visit2;
    function visit2() {
      let result = empty;
      let subresult;
      let offset;
      let grandparents;
      if (!test || is2(node, index, parents[parents.length - 1] || void 0)) {
        result = toResult(visitor(node, parents));
        if (result[0] === EXIT) {
          return result;
        }
      }
      if ("children" in node && node.children) {
        const nodeAsParent = (
          /** @type {UnistParent} */
          node
        );
        if (nodeAsParent.children && result[0] !== SKIP) {
          offset = (reverse ? nodeAsParent.children.length : -1) + step;
          grandparents = parents.concat(nodeAsParent);
          while (offset > -1 && offset < nodeAsParent.children.length) {
            const child = nodeAsParent.children[offset];
            subresult = factory(child, offset, grandparents)();
            if (subresult[0] === EXIT) {
              return subresult;
            }
            offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
          }
        }
      }
      return result;
    }
  }
}
function toResult(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE, value];
  }
  return value === null || value === void 0 ? empty : [value];
}

// node_modules/unist-util-visit/lib/index.js
function visit(tree, testOrVisitor, visitorOrReverse, maybeReverse) {
  let reverse;
  let test;
  let visitor;
  {
    test = testOrVisitor;
    visitor = visitorOrReverse;
    reverse = maybeReverse;
  }
  visitParents(tree, test, overload, reverse);
  function overload(node, parents) {
    const parent = parents[parents.length - 1];
    const index = parent ? parent.children.indexOf(node) : void 0;
    return visitor(node, index, parent);
  }
}

// src/index.ts
var Gallery = () => {
  return {
    name: "Quartz:Gallery",
    markdownPlugins() {
      return [];
    },
    htmlPlugins() {
      return [
        () => (tree, file) => {
          const frontmatter = file?.data?.frontmatter ?? {};
          if (!frontmatter.gallery) return;
          const images = [];
          visit(tree, "element", (node) => {
            if (node.tagName === "img") {
              images.push(node);
            }
          });
          if (images.length === 0) return;
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
                "data-idx": String(idx)
              },
              children: [
                {
                  ...img,
                  properties: {
                    ...img.properties || {},
                    loading: "lazy"
                  }
                }
              ]
            }))
          };
          const toRemove = [];
          visit(tree, "element", (node, _index, parent) => {
            if (parent && node.tagName !== "gallery-masonry") {
              const hasImg = (n) => {
                if (!n || typeof n !== "object") return false;
                if (n.tagName === "img") return true;
                return Array.isArray(n.children) && n.children.some(hasImg);
              };
              if (hasImg(node)) toRemove.push({ node, parent });
            }
          });
          for (const { node, parent } of toRemove) {
            const i = parent.children.indexOf(node);
            if (i >= 0) parent.children.splice(i, 1);
          }
          tree.children.unshift(container);
        }
      ];
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
`
          }
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
      var h = colW; // \u9ED8\u8BA4\u6B63\u65B9\u5F62\uFF0C\u56FE\u7247\u52A0\u8F7D\u540E\u6309\u6BD4\u4F8B\u4FEE\u6B63
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
  lb.innerHTML = '<button class="lb-close">\xD7</button>' +
    '<button class="lb-prev">\u2039</button>' +
    '<img alt=""><div class="lb-meta"></div>' +
    '<button class="lb-next">\u203A</button>';
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
      // \u6E05\u7406 crawl-links \u7ED9\u5916\u94FE\u52A0\u7684 target/_blank \u548C external \u56FE\u6807
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
    // \u56FE\u7247\u52A0\u8F7D\u5B8C\u540E\u91CD\u65B0\u5E03\u5C40\uFF08\u81EA\u7136\u9AD8\u5EA6\uFF09
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
`
          }
        ]
      };
    }
  };
};

export { Gallery };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map