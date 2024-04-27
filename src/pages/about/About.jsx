import React from "react";
import HeaderTop from "../../components/header-top/HeaderTop";
import HeaderBottom from "../../components/header-bottom/HeaderBottom";
import Shop from "../../components/shop/Shop";
import Icons from "../../components/banner-icons/Icons";
import Footer from "../../components/footer/Footer";

const About = () => {
  return (
    <div className="about">
      {/* <HeaderTop />
      <HeaderBottom /> */}
      <Shop />
      <Icons />
      {/* <Footer /> */}
    </div>
  );
};

export default About;
