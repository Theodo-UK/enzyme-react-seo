import React from 'react';
import SEOAnalyzer from '..';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


const Home = () => (
  <div>
    <h1>Example</h1>
  </div>
);

const analyzer = new SEOAnalyzer(Home, 'examplePage');

describe('ExamplePage SEO tests', () => {
  analyzer.getSEOTestSuite();
});
