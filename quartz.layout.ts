import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
head: Component.Head({
  meta: [],
  links: [],
}),
  header: [],
  afterBody: [
		Component.Comments({
			provider: 'giscus',
			options: {
      // from data-repo
			repo: 'Rayme/quartz',
      // from data-repo-id
      repoId: 'R_kgDOOO4mDQ',
      // from data-category
      category: 'Announcements',
      // from data-category-id
      categoryId: 'DIC_kwDOOO4mDc4Ct5BJ',
      // from data-lang
      lang: 'zh-CN'
    }
  }),
  ],
  footer: Component.Footer({
    links: {
      博客: "https://imzm.im",
	  "CC BY-SA 4.0 协议": "https://creativecommons.org/licenses/by-sa/4.0",
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
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
	order: ["date"],
	folderDefaultState: "collapsed",
	}),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
	Component.Backlinks({ title: "反向链接" }),
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
