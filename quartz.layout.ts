import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
head: Component.Head({
  meta: [],
  links: [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-sc/index.css",
    },
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/@fontsource/jetbrains-mono/index.css",
    },
  ],
}),
  header: [],
  afterBody: [Component.RecentNotes({ title: "最近更新", limit: 4 })],
  footer: Component.Footer({
    links: {
      博客: "https://imzm.im",
	  "CC BY-SA 4.0": "https://creativecommons.org/licenses/by-sa/4.0",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
	order: ["date"],
	}),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
	Component.Backlinks({ title: "反向链接" }),
	Component.Graph(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
