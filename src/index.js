import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: You can add a CSS file for styling
import App from './App'; // Import your main App component

// Render the App component inside the div with the id 'root' in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

