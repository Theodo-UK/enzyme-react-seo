# enzyme-react-seo (Work in Progress)
This generic enzyme test suite helps ensure all your React application page components meet minimum SEO requirements. This is not intended to help with server side rendering or performance, but will help ensure you don't miss content or structure issues that impact how search engines rank your pages.

With React is can be difficult to keep in mind the final DOM of a page. For example duplicate content (even if hidden by CSS), multiple h1 tags per page and missing meta data can easily get into production.

## Requirements
Have Enzyme and jest setup.

## Install
`yarn add --dev enzyme-react-seo`

## Usage
Inside a test file: examplePage.test.js
```
import React from 'react';
import SEOAnalyzer from 'enzyme-react-seo';

import ExamplePage from './ExamplePage'

const analyzer = new SEOAnalyzer(ExamplePage, 'examplePage');

describe('ExamplePage SEO tests', () => {
  analyzer.getSEOTestSuite();
});
```

Features:
- [x] Limit of 1 `<h1>` per page
- [ ] keyword: number of time appears
- [ ] keyword: appears in h1
- [ ] keyword: appears in h2, h3 (?)
- [ ] keyword: TFIDF
- [ ] Outbound links (min and max)
- [ ] alt tags on images
- [ ] Meta tag information
- [ ] Duplicate meta tag information
- [ ] JSON-LD data
- [ ] Untranslated Text (multi local as prop)
- [ ] Async script load for page load time [article](https://blog.theodo.fr/2017/07/load-scripts-react-bundle-asynchronously-win-seo/)
- [ ] Breadcrumbs
- [ ] Avoid onClick() for internal linking (href)
- [ ] Avoid # routing
- [ ] Prevent no-index
- [ ] Duplicate Content

# Development
## Enable babel

## Issue with babel development
- When using this test suite it was difficult to keep the install simple without transpiling through babel.
- Therefore a babel config and `yarn build` command were added.
- The issue is, on import, projects using babel and importing this library failed due to `"Plugin/Preset files are not allowed to export objects, only functions"`. This a result of this project's dependency on `babel-preset-react`.
- A quick hack at the moment has been to disable the babel config in the released package.json.
 - This has been achieved by changing the `babel` key to `babel-off` (in package.json).
- When building or testing locally this `babel-off` key needs changing to `babel`
- Any help here would be appreciated.


## Testing 🔎
 - `yarn jest`
## Building 🔨
 - `yarn build`
## Publishing 🚀
 - `yarn publish` (contact project owner)
## PR's 🙂
 - Very welcom :)
