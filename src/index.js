import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';

// Entry point of React
const root = createRoot(document.getElementById('root'))
root.render(<App />)