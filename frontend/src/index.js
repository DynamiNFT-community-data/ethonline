import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Parse from 'parse';

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = process.env.PARSE_APPLICATION_ID;
const PARSE_HOST_URL = process.env.PARSE_HOST_URL;
const PARSE_JAVASCRIPT_KEY = process.env.PARSE_JAVASCRIPT_KEY;

Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);