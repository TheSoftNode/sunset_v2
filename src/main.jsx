import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeProviders from './Theme/ThemeProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProviders>
          <ToastContainer
            theme="light"
            position='top-center'
            autoClose={2000}
            closeOnClick={true}
            pauseOnFocusLoss={false}
            pauseOnHover={false}
            toastClassName=".toast-message"
          />
          <App />
      </ThemeProviders>
    </BrowserRouter>
  </React.StrictMode>
)
