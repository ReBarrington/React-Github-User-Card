import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'; // class component
// import App from './HookApp'; // function component w/hooks

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
