import "./App.css";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import { Route, Routes } from "react-router-dom";
import React, {useState } from 'react';
import DishDetails from "./pages/DishDetails.jsx";
import NotFound from "./pages/NotFound.jsx";
import About from "./pages/About.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="App"> 
      <Routes>
      <Route element={<Layout cart={cart}/>}>
          <Route index element={<Home />} />
          <Route path="/plat/:slug" element={<DishDetails addToCart={addToCart}/>} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart cart={cart}/>} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
