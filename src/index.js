import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from "./CartProvider";

// import Context from './context/Context'
ReactDOM.render(
  <React.StrictMode>
     <CartProvider>
         <App />
     </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

