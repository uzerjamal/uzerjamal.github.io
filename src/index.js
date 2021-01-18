import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import Banner from './banner';
import Portfolio from './portfolio';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Banner />
    <Portfolio />
  </React.StrictMode>,
  document.getElementById('root')
);
