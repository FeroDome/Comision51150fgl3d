
import DataProvider from "./component/Context/DataContext";
import Banner from "./component/Banner/Banner"

import CartWidget from "./component/CartWitget/CartWitget";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./component/Products/ItemListContainer";
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer";
import Navbar from "./component/Navbar/Navbar";


function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<CartWidget />} />
          <Route path='/detalle' element={<ItemDetailContainer />} />
        </Routes>
      <Banner />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;

