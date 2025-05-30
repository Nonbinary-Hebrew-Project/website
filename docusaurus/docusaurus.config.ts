import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import homepageHeaderConfig from "./config/homepage-header.json";

const config: Config = {
  title: homepageHeaderConfig.siteTitle,
  tagline: homepageHeaderConfig.subtitle,
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://nonbinary-hebrew-project.netlify.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Nonbinary-Hebrew-Project", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          path: "docs/grammar",
          routeBasePath: "grammar",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: ({
          //   version,
          //   versionDocsDirPath,
          //   docPath,
          //   permalink,
          //   locale,
          // }) => {
          //   const parts = docPath.replace(".mdx", "").split("/");
          //   const docName = parts.pop();
          //   if (parts.length === 0) parts.push("grammar");
          //   parts.push("entries");
          //   parts.push(docName);
          //   const partsWithMergedBase = [
          //     parts.slice(0, -2).join("-"),
          //     ...parts.slice(-2),
          //   ];
          //   return (
          //     "https://nonbinary-hebrew-project.netlify.app/admin/#/collections/" +
          //     partsWithMergedBase.join("/")
          //   );
          // },
        },
        blog: {
          routeBasePath: "uses",
          blogSidebarTitle: "All applied uses",
          blogSidebarCount: "ALL",
          postsPerPage: "ALL",
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: ({ blogDirPath, blogPath, permalink, locale }) =>
          //   `https://nonbinary-hebrew-project.netlify.app/admin/#/collections/${blogDirPath}/entries/${blogPath.replace(
          //     ".mdx",
          //     ""
          //   )}`,
          // Useful options to enforce blogging best practices
          onInlineTags: "ignore",
          onInlineAuthors: "ignore",
          onUntruncatedBlogPosts: "ignore",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [ require.resolve('docusaurus-lunr-search'), {
      languages: ['en', 'he'] // language codes
    }],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "resources",
        path: "docs/resources",
        routeBasePath: "resources",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: homepageHeaderConfig.siteTitle,
      logo: {
        alt: homepageHeaderConfig.siteLogo.alt,
        src: homepageHeaderConfig.siteLogo.src,
      },
      items: [
        ...require("./config/dropdowns.json").dropdowns.map(dropdown => ({
            type: "dropdown",
            position: "left",
            label: dropdown.label,
            items: dropdown.items
        })),
        {
          type: "docSidebar",
          sidebarId: "grammarSidebar",
          position: "left",
          label: "Grammar",
        },
        { to: "/uses/tags", label: "NBHP in Practice", position: "left" },
        // { to: "/faq", label: "FAQ", position: "left" },
        // {
        //   docsPluginId: "resources",
        //   type: "docSidebar",
        //   sidebarId: "resourcesSidebar",
        //   position: "left",
        //   label: "Resources",
        // },
        {
          type: "custom-translateButtons",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Contributing",
          items: [
            {
              label: "Github",
              href: "https://github.com/Nonbinary-Hebrew-Project/website",
            },
            // {
            //   label: "Translations Dictionary",
            //   href: "https://github.com/Nonbinary-Hebrew-Project/website/blob/main/docusaurus/src/components/Hebrew/nonbinary-hebrew-dictionary.json",
            // },
            {
              label: "Content Manager",
              href: "https://nonbinary-hebrew-project.netlify.app/admin/",
            },
          ],
        },
        {
          title: "Tools",
          items: [
            {
              label: "Transliteration Tool",
              href: "/transliterate",
            },
          ],
        },
        {
          title: "Get in touch",
          items: [
            {
              label: "Contact form",
              href: "/about#contact-form",
            },
            {
              label: "Donate",
              href: "/donate",
            },
          ],
        },
      ],
      copyright: `<a style="color: lightblue" href="https://creativecommons.org/licenses/by/4.0/">CreativeCommons Attribution 4.0</a> - Nonbinary Hebrew Project`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
