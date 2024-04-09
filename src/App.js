import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;
