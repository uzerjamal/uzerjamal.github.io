import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import Banner from './banner';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Banner />
  </React.StrictMode>,
  document.getElementById('root')
);
