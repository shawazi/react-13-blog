import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthProvider } from "./contexts/AuthContext";
import ToastProvider from "./utilities/ToastProvider";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <ToastProvider>
      <App />
    </ToastProvider>
  </AuthProvider>
);

