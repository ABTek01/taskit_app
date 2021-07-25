//rendering page; where we render all of our components

import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';//importing a component


ReactDOM.render(
  <React.StrictMode>
    <App /> {/*parent component*/}
  </React.StrictMode>,
  document.getElementById('root')
);

