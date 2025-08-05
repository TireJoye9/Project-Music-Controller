//New react 18 garbage, have to use their new api shit
import React from 'react';
import ReactDOM from 'react-dom/client';   // import from 'react-dom/client' for React 18+
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);