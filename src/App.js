import "./App.css";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import { Route, Routes } from "react-router-dom";
import DishDetails from "./pages/DishDetails.jsx";
import NotFound from "./pages/NotFound.jsx";
import About from "./pages/About.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  


  return (
    <div className="App"> 
      <Routes>
      <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/plat/:slug" element={<DishDetails/>} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart/>} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
