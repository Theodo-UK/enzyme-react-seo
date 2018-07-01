import React from 'react';

let Enzyme;

export default class SEOAnalyzer {
  constructor(PageComponent, pageName, enzyme, keywords=[]) {
    this.page = PageComponent;
    this.pageName = pageName;
    this.keywords = keywords;
    Enzyme = enzyme;
  }

  getWrappedPage() {
    const PageToRender = this.page;
    return Enzyme.render(<PageToRender />);
  }

  getTest(name, conditions) {
    return it(name, conditions);
  }

  getH1LimitTestConditions(h1CountLimit) {
    const conditions = () => {
      expect(this.getWrappedPage().find('h1').length).toBe(h1CountLimit);
    };

    return conditions;
  }

  getH1KeywordConentTestConditions(h1CountLimit) {
    const conditions = () => {
      const h1Content = this.getWrappedPage().find('h1').first().text();
      this.keywords.forEach(keyword => expect(h1Content.match(keyword)).toContain(keyword));
    };

    return conditions;
  }

  getImgAltTagTestConditions() {
    const conditions = () => {
      const imgs = this.getWrappedPage()
        .find('img')
        .each((index, img) => expect(img.attribs.alt).toBeDefined());
    };

    return conditions;
  }

  getH1LimitTest() {
    const h1CountLimit = 1;
    const name = `<${this.pageName}>: Does not have too many H1s. Max ${h1CountLimit} per page`;
    const conditions = this.getH1LimitTestConditions(h1CountLimit);
    return this.getTest(name, conditions);
  }

  getH1KeywordConentTest() {
    const name = `<${this.pageName}>: H1 contains all keywords.`;
    const conditions = this.getH1KeywordConentTestConditions();
    return this.getTest(name, conditions);
  }

  getImgAltTagTest() {
    const name = `<${this.pageName}>: All imgs have alt tags`;
    const conditions = this.getImgAltTagTestConditions();
    return this.getTest(name, conditions);
  }

  getSEOTestSuite() {
    this.getH1LimitTest();
    this.getH1KeywordConentTest();
    this.getImgAltTagTest();
  }
}
