# To-Do

Content manager:
- [ ] add tags to Applied Uses where missing

Code changes:
- [ ] make HebrewBlock respect dark mode better
- [ ] improve CMS preview https://decapcms.org/docs/customization/

# External Code Changes
- [x] Our search plugin has a [keyDown](https://github.com/praveenn77/docusaurus-lunr-search/blob/main/src/theme/SearchBar/index.jsx#L123C20-L123C41) handler that is not accessible (cannot shift-tab beyond it). We should submit a PR based on the advice we got from WebAIM on keyDown handlers.
    - https://github.com/praveenn77/docusaurus-lunr-search/pull/165