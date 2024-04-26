import "./App.css";
import Icons from "./components/banner-icons/Icons";
import Footer from "./components/footer/Footer";
import HeaderBottom from "./components/header-bottom/HeaderBottom";
import HeaderTop from "./components/header-top/HeaderTop";
import Shop from "./components/shop/Shop";

function App() {
  return (
    <div className="App">
      <HeaderTop />
      <HeaderBottom />
      {/* <carousel/> */}
      <Shop />
      <Icons />
      <Footer />
    </div>
  );
}

export default App;
