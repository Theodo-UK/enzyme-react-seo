import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { configure } from 'enzyme';

configure({adapter: new Adapter()})

import SEOAnalyzer from '../lib';

const Home = () => (
  <div>
    <h1>Example</h1>
  </div>
);

const analyzer = new SEOAnalyzer(Home, 'examplePage', Enzyme);

describe('ExamplePage SEO tests', () => {
  analyzer.getSEOTestSuite();
});
