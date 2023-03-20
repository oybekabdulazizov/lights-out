import React from 'react';
import { Fragment } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Fragment>
      <App />
    </Fragment>
  </React.StrictMode>
);
