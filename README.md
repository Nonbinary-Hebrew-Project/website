# Nonbinary Hebrew Project

This is the repository for the Nonbinary Hebrew Project website.

Most copy editing can be done using the Content Management System (CMS): https://nonbinary-hebrew-project.netlify.app/admin/

If you want to add a new collection to the CMS, which is required for things like adding a new subsection to the Grammar docs,
you will need to edit the file `docusaurus/static/config.yml` manually.

## Deployment
Deployment happens automatically on push to main, which happens automatically when publishing from the CMS.

If deployment isn't working, the build is probably broken due to a syntax error introduced.
You can check the status and diagnose it by visiting the Actions tab above here in the Github repo.

## Under the hood
We use Docusaurus as our static site generator.

We use DecapCMS as our CMS, which relies on Github authentication.

We use Netlify for deployment and free hosting.

For transliteration, we use: https://github.com/charlesLoder/hebrew-transliteration

For translation, we use a combination of a custom translation dictionary connected to our CMS, and https://github.com/openscriptures/strongs
