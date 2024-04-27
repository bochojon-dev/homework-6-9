import React from "react";
import "../../pages/login/Login.css";
import HeaderTop from "../../components/header-top/HeaderTop";
import HeaderBottom from "../../components/header-bottom/HeaderBottom";
import Footer from "../../components/footer/Footer";
import logo from "../../assets/images/logo.png";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("atuny0");
  const [password, setPassword] = useState("9uQFF1Lh");
  const [loading, setLoading] = useState(false);
  function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    let user = {
      username,
      password,
    };
    axios
      .post("https://dummyjson.com/auth/login", user)
      .then((res) => {
        console.log("res>>>", res.data.token);
        toast.success("Welcome!");
        localStorage.setItem("token", res.data.token);
        navigate("/admin");
      })
      .catch((err) => {
        console.log("err>>>", err);
        toast.error("username or password is incorrect");
      })
      .finally(() => setLoading(false));
  }
  return (
    <div className="login">
      <div className="container">
        {HeaderTop}
        {HeaderBottom}
        <div className="login_contents">
          <form onSubmit={handleLogin} action="">
            <div className="form">
              <img src={logo} alt="logo" />
              <div className="email">
                <label htmlFor="email">Email Address*</label>
                <input
                  required
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  name="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="password">
                <label htmlFor="password">Password*</label>
                <input
                  required
                  onChange={(e) => setPassword(e.target.value)}
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
                <button disabled={loading} type="submit" className="btn1">
                  {loading ? "Loading..." : "Login"}
                </button>
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
