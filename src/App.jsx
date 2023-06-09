import Navbar from "./component/Navbar/Navbar";
import React from "react";
import "./App.css";
import ItemListContainer from "./component/ItemListContainer/ItemlistContainer";
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cart from "./component/Cart/Cart";
import CartProvider from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

import Login from "./Login/Login";
import Checkout from "./component/CheckOut/CheckOut";
import { NotificationProvider } from "./component/notification/NotificationService";

function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <BrowserRouter>
          <AuthProvider>
            <CartProvider>
              <Navbar />
              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
                <Route path='/login' element={<Login />} />
                <Route path='/checkout' element={<Checkout />} />
              </Routes>
            </CartProvider>
          </AuthProvider>
        </BrowserRouter>
      </NotificationProvider>

    </div>
  );
};

export default App;