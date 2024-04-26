import React from "react";
import "../banner-icons/Icons.css";
import icon1 from "../../assets/images/icon1.svg";
import icon2 from "../../assets/images/icon2.svg";
import icon3 from "../../assets/images/icon3.svg";
import icon4 from "../../assets/images/icon4.svg";
import icon5 from "../../assets/images/icon5.svg";

const Icons = () => {
  const items = [
    {
      id: 1,
      image: icon1,
      title: "Best prices & offers",
      desc: "Orders $50 or more",
    },
    {
      id: 2,
      image: icon2,
      title: "Free delivery",
      desc: "24/7 amazing services",
    },
    {
      id: 3,
      image: icon3,
      title: "Great daily deal",
      desc: "When you sign up",
    },
    {
      id: 4,
      image: icon4,
      title: "Wide assortment",
      desc: "Wide assortment",
    },
    {
      id: 5,
      image: icon5,
      title: "Wide assortment",
      desc: "Within 30 days",
    },
  ];
  const item = items?.map((e) => (
    <div key={e.id} className="icon_item">
      <img src={e.image} alt="company icons" />
      <div className="icon_texts">
        <h3>{e.title}</h3>
        <p>{e.desc}</p>
      </div>
    </div>
  ));
  return (
    <div className="icons">
      <div className="container">
        <div className="icon_items">{item}</div>
      </div>
    </div>
  );
};

export default Icons;
