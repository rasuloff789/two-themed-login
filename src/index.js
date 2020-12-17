import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LanguagesProvider } from "./LanguagesContext";

ReactDOM.render(
  <React.StrictMode>
  <LanguagesProvider>
  <App />
  </LanguagesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);