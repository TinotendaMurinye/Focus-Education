// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './screens/Dash_components/chartSetup'; // Import the setup here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);