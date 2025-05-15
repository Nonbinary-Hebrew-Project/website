# To-Do

Content manager:
- [ ] add real 'alt text' on the About Us page for accessibility
- [ ] add tags to Applied Uses where missing
- [ ] configure the "Sidebar Position" field on the Grammar pages to order the pages
- [ ] add the masculine and feminine versions of the examples on the Grammar pages for comparison

Code changes:
- [ ] update the home page?
- [ ] make HebrewBlock respect dark mode better
- [ ] improve CMS preview https://decapcms.org/docs/customization/
- [ ] Extend dictionary JSON loader into general JSON loader and add copyediting to CMS
- [ ] Add Pinned Posts on homepage (maybe just JSON loaded list to start?)

# External Code Changes
- [ ] Our search plugin has a [keyDown](https://github.com/praveenn77/docusaurus-lunr-search/blob/main/src/theme/SearchBar/index.jsx#L123C20-L123C41) handler that is not accessible (cannot shift-tab beyond it). We should submit a PR based on the advice we got from WebAIM on keyDown handlers.