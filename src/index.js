// react imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

// project imports
import App from './App';

// root from index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// strict mode for debugging and highlighting potential problems
// using hashrouter for github pages (doesn't support browser router)
root.render(
  <React.StrictMode>
  <HashRouter>
    <App />
  </HashRouter>
  </React.StrictMode>
);
