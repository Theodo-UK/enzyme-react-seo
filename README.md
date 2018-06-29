# enzyme-react-seo (Work in Progress)
This is a simple generic test suite to ensure all your React applications meet minimum SEO requirements. This will not help with server side rendering or performance, but will ensure you don't miss things that impact how search engines rank your pages.

With React is can be difficult to keep in mind the final DOM of a page, duplicate content (even if hidden by CSS), multiple h1 tags per page and missing meta data for example can easily get into production.

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
