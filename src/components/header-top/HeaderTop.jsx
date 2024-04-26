import React from "react";
import "../header-top/HeaderTop.css";
import menu from "../../assets/images/menu.svg";
import phone from "../../assets/images/phone.svg";
import option from "../../assets/images/bottom_arrow.svg";

const HeaderTop = () => {
  let items = ["Home", "Category", "Products", "Pages", "Blog", "Elements"];
  const links = items.map((el, i) => (
    <li key={i}>
      {el} <img src={option} alt="" />
    </li>
  ));
  return (
    <div className="header">
      <div className="container">
        <div className="header_contents">
          <img src={menu} alt="menu" />
          <ul>{links}</ul>
          <div className="phone">
            <img src={phone} alt="phone" />
            <p>+123 ( 456 ) ( 7890 )</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
