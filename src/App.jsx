import Navbar from "./component/Navbar/Navbar";
import "./App.css";
import ItemListContainer from "./component/ItemListContainer/ItemlistContainer";
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer";

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CartWidget from "./component/CartWitget/CartWitget";



function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/cart" element={<CartWidget />} />
        <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
      </Routes>
      </BrowserRouter>

    </>
  );
};

export default App;