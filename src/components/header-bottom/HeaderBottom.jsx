import React from "react";
import "../header-bottom/HeaderBottom.css";
import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.svg";
import user from "../../assets/images/user.svg";
import heart from "../../assets/images/heart.svg";
import cart from "../../assets/images/cart.svg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HeaderBottom = () => {
  let navigate = useNavigate();
  const icons = [
    {
      id: 1,
      image: user,
      title: "Account",
      link: "/login",
    },
    {
      id: 2,
      image: heart,
      title: "Wishlist",
      link: "/admin",
    },
    {
      id: 3,
      image: cart,
      title: "Cart",
      link: "#",
    },
  ];
  let icon = icons.map((e) => (
    <li key={e.id}>
      <NavLink to={e.link}>
        <img src={e.image} alt="icon" />
        <p>{e.title}</p>
      </NavLink>
    </li>
  ));

  return (
    <div className="bottom">
      <div className="container">
        <div className="bottom_contents">
          <div className="logo">
            <NavLink to={"/about"}>
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className="inputs">
            <form>
              <input type="text" placeholder="Search for items..." />
              <select name="search">
                <option
                  onClick={() => navigate("/about")}
                  value="All categories"
                >
                  <NavLink to={"/about"}>All categories</NavLink>
                </option>
                <option onClick={() => navigate("/admin")} value="Vegetables">
                  <NavLink to={"/admin"}>Admin</NavLink>
                </option>
                <option onClick={() => navigate("/login")} value="Clothes">
                  <NavLink to={"/login"}>Login</NavLink>
                </option>
              </select>
              <span>
                <img src={search} alt="search" />
              </span>
            </form>
          </div>
          <div className="icons">
            <ul>{icon}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
