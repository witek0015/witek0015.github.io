import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Codex Dimeanus",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "pl-PL",
    baseUrl: "witek0015.github.io/dimea-lore",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        title: "Pirata One",
        header: "Metamorphous",
        body: "Aleo",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f5ead6",
          lightgray: "#ddd1bc",
          gray: "#a79885",
          darkgray: "#4e4034",
          dark: "#2d1b0e",
          secondary: "#8b1a1a",
          tertiary: "#c14444",
          highlight: "#fff0d6",
          textHighlight: "#fae0a6",
        },
        darkMode: {
          light: "#2c1b10",
          lightgray: "#3a2a1e",
          gray: "#6f5c4e",
          darkgray: "#d7c3a9",
          dark: "#f1d6b6",
          secondary: "#d04e4e",
          tertiary: "#8b1a1a",
          highlight: "5b3a25",
          textHighlight: "#8c5e35",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
     // Plugin.CreatedModifiedDate({
     //   priority: ["frontmatter", "git", "filesystem"],
     // }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.ExplicitPublish()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      //Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      //Plugin.CustomOgImages(),
    ],
  },
}

export default config
