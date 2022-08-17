import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // this is the reason why the app renders things twice on mount. This only happens in dev mode
  // get rid of strictmode if you don't want that.
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
