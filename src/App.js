
import DataProvider from "./component/Context/DataContext";
import Home from "../src/component/Home/Home";
import CartWidget from "./component/CartWitget/CartWitget";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartWidget />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;

