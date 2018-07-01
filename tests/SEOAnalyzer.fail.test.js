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
const toBeFailMock = (received, expected) => {
  const {pass, message} = expect.toBe(received, expected);
  return {
    pass: !pass,
    message: `NOT: ${message}`,
  }
};

/*
* Override toContain from expect to revert the pass condition.
* In this run of the test suite we test the cases where toBe should fail.
*/
const toContainMock = (received, expected) => {
  const {pass, message} = expect.toContain(received, expected);
  return {
    pass: !pass,
    message: `NOT: ${message}`,
  }
}

expect.extend({toBe: toBeFailMock, toContain: toContainMock});

const keywords = ['the', 'quick', 'lazy'];
const analyzer = new SEOAnalyzer(Home, 'examplePage', Enzyme, keywords);

describe('Expect Fail: ExamplePage SEO tests', () => {
  analyzer.getSEOTestSuite();
});


describe('Expect Fail: getH1LimitTest', () => {
  analyzer.getSEOTestSuite();
  expect.extend({});
});
