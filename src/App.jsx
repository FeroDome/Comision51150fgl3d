import Navbar from "./component/Navbar/Navbar";
import React from "react";
import "./App.css";
import ItemListContainer from "./component/ItemListContainer/ItemlistContainer";
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cart from "./component/Cart/Cart";
import CartProvider from "./context/CartContext";

import Login from "./Login/Login";
import Checkout from "./component/CheckOut/CheckOut";

function App() {
  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>

    </>
  );
};

export default App;