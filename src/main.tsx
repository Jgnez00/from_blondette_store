import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import App from './App';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2500,
          style: {
            background: '#1f2028',
            color: '#f3f4f6',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
          },
        }}
      />
    </BrowserRouter>
  </React.StrictMode>,
);
