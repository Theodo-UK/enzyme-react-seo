import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { configure } from 'enzyme';

configure({adapter: new Adapter()})

import SEOAnalyzer from '../src';

const Home = () => (
  <div>
    <h1>The quick brown fox jumps over the lazy dog</h1>
    <img src="./path/to/it/" alt="something useful" />
  </div>
);

const keywords = ['the', 'quick', 'lazy'];
const analyzer = new SEOAnalyzer(Home, 'examplePage', Enzyme, keywords);

describe('expect Pass: ExamplePage SEO tests', () => {
  analyzer.getSEOTestSuite();
});


describe('expect Pass: getH1LimitTest', () => {
  analyzer.getSEOTestSuite();
});
