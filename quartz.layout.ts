import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.PageTitle(),],
  afterBody: [],
  footer: Component.Footer({
    links: {

    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs({
        spacerSymbol: "⁀➴",
        rootName: "Codex",
    //    showCurrentPage = false,
      }),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  //  Component.TagList(),
  ],
  left: [
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
    Component.Flex({
      components: [
      {
        Component: Component.Explorer({
          mapFn: (node) => {
            if (node.isFolder) {
              if (node.displayName == "Podsumowania") {
                node.displayName = "👑 " + node.displayName
              }else{
              node.displayName = "🚪 " + node.displayName
            }} else {
              node.displayName = "📜 " + node.displayName
            }
          }
        }),
        grow: true,
      },
      {
        Component: Component.ConditionalRender({
          component: Component.RecentNotes({
            title: "Ostatnie wpisy",
            limit: 5,
            showTags: false,
          }),
          condition: (page) => page.fileData.slug == "index",
        }),
        shrink: true,
      }
      ],
      gap: "1rem",
      wrap: "wrap",
      direction: "column",
    }),


  ],
  right: [
    Component.DesktopOnly(Component.Graph()),
    Component.TableOfContents(),
    Component.Backlinks(),
  ],
  afterBody: [

  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({
      spacerSymbol: "⁀➴",
      rootName: "Codex",
    }),
    Component.ArticleTitle(),
    //Component.ContentMeta()],
    ],
  left: [
    //Component.PageTitle(),
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
      mapFn: (node) => {
        if (node.isFolder) {
          if (node.displayName == "Podsumowania") {
            node.displayName = "👑 " + node.displayName
          }else{
            node.displayName = "🚪 " + node.displayName
          }} else {
            node.displayName = "📜 " + node.displayName
          }
      }
    }),
  ],
  right: [],
}
