import "./App.css";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import { Route, Routes } from "react-router-dom";
import DishDetails from "./pages/DishDetails.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/plat/:slug" element={<DishDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
