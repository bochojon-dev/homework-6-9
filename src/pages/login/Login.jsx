import React from "react";
import "../../pages/login/Login.css";
import HeaderTop from "../../components/header-top/HeaderTop";
import HeaderBottom from "../../components/header-bottom/HeaderBottom";
import Footer from "../../components/footer/Footer";
import logo from "../../assets/images/logo.png";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        {HeaderTop}
        {HeaderBottom}
        <div className="login_contents">
          <form action="">
            <div className="form">
              <img src={logo} alt="logo" />
              <div className="email">
                <label htmlFor="email">Email Address*</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="password">
                <label htmlFor="password">Password*</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                />
              </div>
              <div className="other_option">
                <div className="checkbox">
                  <input type="checkbox" name="remember" />
                  <label htmlFor="checkbox">Remember Me</label>
                </div>
                <p className="par">Forgot Password</p>
              </div>
              <div className="buttons">
                <button className="btn1">Login</button>
                <button className="btn2">Signup?</button>
              </div>
            </div>
          </form>
        </div>
        {Footer}
      </div>
    </div>
  );
};

export default Login;
