import React from "react";
import "../admin/Admin.css";
import HeaderTop from "../../components/header-top/HeaderTop";
import HeaderBottom from "../../components/header-bottom/HeaderBottom";
import Footer from "../../components/footer/Footer";
import admin from "../../assets/images/admin.png";

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
          <div className="hero">
            <div className="hero_texts">
              <h3>Admin panel</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione, recusandae necessitatibus quasi incidunt alias adipisci
                pariatur earum iure beatae assumenda rerum quod. Tempora magni
                autem a voluptatibus neque.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                vitae rerum cum accusamus magni consequuntur architecto, ipsum
                deleniti expedita doloribus suscipit voluptatum eius perferendis
                amet!.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, maxime amet architecto est exercitationem optio ea
                maiores corporis beatae, dolores doloribus libero nesciunt qui
                illum? Voluptates deserunt adipisci voluptatem magni sunt sed
                blanditiis quod aspernatur! Iusto?
              </p>
              <div className="customers">
                <div className="custom">
                  <h4>
                    0.1<span>k</span>
                  </h4>
                  <p>Vendors</p>
                </div>
                <div className="custom">
                  <h4>
                    23<span>k</span>
                  </h4>
                  <p>Customer</p>
                </div>
                <div className="custom">
                  <h4>
                    2<span>k</span>
                  </h4>
                  <p>Products</p>
                </div>
              </div>
            </div>
            <img src={admin} alt="product" />
          </div>
          <div className="admin_icons">
            <div className="admin_icon">
              <h3>Product Packing</h3>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <div className="admin_icon">
              <h3>24X7 Support</h3>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <div className="admin_icon">
              <h3>Delivery in 5 Days</h3>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <div className="admin_icon">
              <h3>Payment Secure</h3>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
          </div>
        </div>
        {Footer}
      </div>
    </div>
  );
};

export default Admin;
