import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import App from './App';
import ContextState from './context/ContextState';

import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <ContextState>
            <App />
        </ContextState>
    </HashRouter >
);

reportWebVitals();
