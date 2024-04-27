import React from "react";
import "../admin/Admin.css";
import HeaderTop from "../../components/header-top/HeaderTop";
import HeaderBottom from "../../components/header-bottom/HeaderBottom";
import Footer from "../../components/footer/Footer";

const Admin = () => {
  return (
    <div className="admin">
      <div className="container">
        {HeaderTop}
        {HeaderBottom}
        <div className="admin_contents">
          <div className="title">
            <h2>About Us</h2>
            <h5>
              <p>Home</p> <p>-</p> <p>About Us</p>
            </h5>
          </div>
        </div>
        {Footer}
      </div>
    </div>
  );
};

export default Admin;
