import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './routers/App';
import './assets/style.scss'
import 'react-toastify/dist/ReactToastify.css';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from 'react-use-cart';
import { WishlistProvider } from 'react-use-wishlist';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WishlistProvider>
    <CartProvider>
   <ProductProvider>
       <App />
    </ProductProvider>
   </CartProvider>
    </WishlistProvider>
  
  </React.StrictMode>
);
