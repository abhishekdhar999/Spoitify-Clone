import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import './index.css';
import App from './App';
import { store } from './redux/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      
      <Router>
        <App />
      </Router>
      
    </Provider>
  </React.StrictMode>,
);
