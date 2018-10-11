import 'components/quarks/_main.scss';
import '@kunukn/dfds-fonts/fonts/main/font.css';
import '@kunukn/dfds-icons/files/main/icons.svg'; // make it available as resource at url: /icons.svg
import React from 'react';
import ReactDOM from 'react-dom';
//import { HomePage } from 'components/pages';
import  HomePage  from 'components/pages/HomePage/HomePage';
import 'whatwg-fetch';
import Promise from 'promise';

import testES8 from './test-es8';

if (typeof window !== 'undefined' && !window.Promise) {
  window.Promise = Promise;
}

testES8();

ReactDOM.render(
 <HomePage/>, document.getElementById('root'));
