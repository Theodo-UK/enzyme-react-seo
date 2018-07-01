import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { configure } from 'enzyme';

configure({adapter: new Adapter()})

import SEOAnalyzer from '../src';

const Home = () => (
  <div>
  </div>
);

/*
* Override toBe from expect to revert the pass condition.
* In this run of the test suite we test the cases where toBe should fail.
*/
const toBeFailMock = {
  toBe(received, expected) {
    const pass = !Object.is(received, expected);
    if (pass) {
      return {
        pass: true,
        message: () => `expected ${received} not to be ${expected}`,
      }
    } else {
      return {
        pass: false,
        message: () => `expected ${received} not to be ${expected}`,
      }
    }
  }
};
expect.extend(toBeFailMock);

const analyzer = new SEOAnalyzer(Home, 'examplePage', Enzyme);

describe('Expect Fail: ExamplePage SEO tests', () => {
  analyzer.getSEOTestSuite();
});


describe('Expect Fail: getH1LimitTest', () => {
  analyzer.getSEOTestSuite();
  expect.extend({});
});
