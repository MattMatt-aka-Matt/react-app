import "./App.css";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
