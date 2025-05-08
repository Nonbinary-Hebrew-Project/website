# Nonbinary Hebrew Project

This is the repository for the Nonbinary Hebrew Project website.

Most copy editing can be done using the Content Management System (CMS): https://nonbinaryhebrew.com/admin/

## Adding a new CMS Collection
If you want to add a new collection to the CMS, which is required for things like adding a new subsection to the Grammar docs,
you will need to create a new folder and edit the file  manually. This will require some understanding of how to clone a github repo or how to edit a repo in the Github UI.

Steps:
1. Create a new folder inside the `docusaurus/docs` folder with at least 1 file in it to start. Put the folder inside an existing folder (such as `grammar` or `resources` to create a subsection of an existing collection; if you want to create a totally separate section with its own navigation leftbar, then you will also have to add a new Sidebar (see the following section of this readme)
1. Copy existing configuration in `docusaurus/static/config.yml` such as the following. Set the `name` and `label` to whatever you want, and set `folder` to the new folder that you created.
```
  - name: grammar
    label: "Grammar"
    folder: docusaurus/docs/grammar
    identifier_field: title
    extension: mdx
    format: frontmatter
    widget: "list"
    create: true
    slug: "{{slug}}"
    fields:
      - { name: title, label: Title, widget: string }
      - {
          name: body,
          hint: "For hebrew blocks, use <HB> צ </HB>. Multi-line hebrew blocks are not supported.",
          label: Body,
          widget: markdown,
        }
      - { name: slug, label: Slug, widget: string }
      - {
          name: sidebar_position,
          label: "Sidebar Position",
          widget: number,
          value_type: int,
        }
```

## Making a new Sidebar for a new Collection
This will require some understanding if editing a Github repository using a clone or the Github UI. It will also require manually editing configuration in Typescript/Javascript.
If you want to create a new sidebar (group of documents that can be navigated between using a left nav bar), edit `docusaurus/docusaurus.config.ts` and add a new entry in the `plugins:` section, like:

```
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "resources",
        path: "docs/resources",
        routeBasePath: "resources",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
```
Then you can link to it in the top bar by adding a new entry to the `navbar: items:` section like:
```
        {
          docsPluginId: "resources",
          type: "docSidebar",
          sidebarId: "resourcesSidebar",
          position: "left",
          label: "Resources",
        },
```

## Deployment
Deployment happens automatically on push to main, which happens automatically when publishing from the CMS.

If deployment isn't working, the build is probably broken due to a syntax error introduced.
You can check the status and diagnose it by visiting the Actions tab above here in the Github repo.

## Under the hood
We use Docusaurus as our static site generator, with a Lunr plugin for client-side search.

We use DecapCMS as our CMS, which relies on Github authentication.

We use Netlify for deployment and free hosting.

For transliteration, we use: https://github.com/charlesLoder/hebrew-transliteration

For translation, we use a combination of a custom translation dictionary connected to our CMS, and https://github.com/openscriptures/strongs
