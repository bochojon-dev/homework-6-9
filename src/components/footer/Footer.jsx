import React from "react";
import "../footer/Footer.css";
import navigation from "../../assets/images/navigation.svg";
import email from "../../assets/images/email.svg";
import phone from "../../assets/images/phone.svg";
import footerLogo from "../../assets/images/footer-logo.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import global from "../../assets/images/global.svg";
import instagram from "../../assets/images/instagram.svg";
import footer1 from "../../assets/images/footer1.svg";
import footer2 from "../../assets/images/footer2.svg";
import footer3 from "../../assets/images/footer3.svg";
import footer4 from "../../assets/images/footer4.svg";
import footer5 from "../../assets/images/footer5.svg";
import send from "../../assets/images/send.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_contents">
          <ul>
            <li>
              <img src={footerLogo} alt="logo" />
            </li>
            <li>
              <p className="p par1">
                FoodTrove is the biggest market of grocery products. Get your
                daily needs from our store.
              </p>
            </li>
            <li>
              <div className="footer_contact">
                <img src={navigation} alt="contact" />
                <p className="p">
                  51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783,
                  USA.
                </p>
              </div>
            </li>
            <li>
              <div className="footer_contact">
                <img src={email} alt="contact" />
                <p className="p">example@email.com</p>
              </div>
            </li>
            <li>
              <div className="footer_contact">
                <img src={phone} alt="contact" />
                <p className="p">example@email.com</p>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <h4>Company</h4>
            </li>
            <li>
              <p className="p">About Us</p>
            </li>
            <li>
              <p className="p">Delivery Information</p>
            </li>
            <li>
              <p className="p">Privacy Policy</p>
            </li>
            <li>
              <p className="p">Privacy Policy</p>
            </li>
            <li>
              <p className="p">Contact Us</p>
            </li>
            <li>
              <p className="p">Support Center</p>
            </li>
          </ul>
          <ul>
            <li>
              <h4>Category</h4>
            </li>
            <li>
              <p className="p"> Dairy & Bakery</p>
            </li>
            <li>
              <p className="p">Fruits & Vegetable</p>
            </li>
            <li>
              <p className="p">Snack & Spice</p>
            </li>
            <li>
              <p className="p">Juice & Drinks</p>
            </li>
            <li>
              <p className="p">Chicken & Meat</p>
            </li>
            <li>
              <p className="p"> Fast Food</p>
            </li>
          </ul>
          <ul>
            <li>
              <h4>Subscribe Our Newsletter</h4>
            </li>
            <li>
              <div className="input">
                <form action="">
                  <input type="text" placeholder="Search here..." />
                </form>
                <img src={send} alt="search" />
              </div>
            </li>
            <li>
              <div className="footer_icons">
                <div className="social_media">
                  <img src={facebook} alt="social icon" />
                </div>
                <div className="social_media">
                  <img src={twitter} alt="social icon" />
                </div>
                <div className="social_media">
                  <img src={global} alt="social icon" />
                </div>
                <div className="social_media">
                  <img src={instagram} alt="social icon" />
                </div>
              </div>
            </li>
            <li>
              <div className="footer_images">
                <img src={footer1} alt="products" />
                <img src={footer2} alt="products" />
                <img src={footer3} alt="products" />
                <img src={footer4} alt="products" />
                <img src={footer5} alt="products" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
