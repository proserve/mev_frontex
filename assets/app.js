import React from 'react';
import ReactDom from 'react-dom';

import Home from './components/Home';
import './components/main.scss';

ReactDom.render(
  <Home />,
  document.getElementById('main_container'),
);
