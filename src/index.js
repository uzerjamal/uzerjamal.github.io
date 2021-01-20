import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import Banner from './banner';
import Portfolio from './portfolio';
import About from './Aboutandskills';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Banner />
    <About />
    <Portfolio />
  </React.StrictMode>,
  document.getElementById('root')
);
