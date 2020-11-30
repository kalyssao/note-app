import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GeistProvider>
        <CssBaseline />
        <Router>
            <App />
        </Router>
    </GeistProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
