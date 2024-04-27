import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Icons from "./components/banner-icons/Icons";
import Footer from "./components/footer/Footer";
import HeaderBottom from "./components/header-bottom/HeaderBottom";
import HeaderTop from "./components/header-top/HeaderTop";
// import Shop from "./components/shop/Shop";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";

function App() {
  return (
    <div className="App">
      <HeaderTop />
      <HeaderBottom />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
