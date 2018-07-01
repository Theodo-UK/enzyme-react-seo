import React from 'react';
import Enzyme from 'enzyme';

export default class SEOAnalyzer {
  constructor(PageComponent, pageName) {
    this.page = PageComponent;
    this.pageName = pageName;
  }

  getWrappedPage() {
    const PageToRender = this.page;
    return Enzyme.render(<PageToRender />);
  }

  getTest(name, conditions) {
    return it(name, conditions);
  }

  getH1LimitTest() {
    const h1CountLimit = 1;
    const name = `<${this.pageName}>: Has too many h1 elements. Max ${h1CountLimit} per page`;
    const conditions = () => {
      expect(this.getWrappedPage().find('h1').length).toBe(h1CountLimit);
    };
    return this.getTest(name, conditions);
  }

  getSEOTestSuite() {
    this.getH1LimitTest();
  }
}
