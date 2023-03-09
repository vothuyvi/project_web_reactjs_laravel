import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const loginUser = async () => {
    axios
      .post("http://127.0.0.1:8000/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        const {
          data: { data: user },
        } = response;
        console.log(user.token.accessToken); //lay token ra
        // check if exist token then go to home page
        if (user.token.accessToken) {
          localStorage.setItem("tokenlogin", user.token.accessToken);
          navigate("/"); // dùng navigate để chuyển trang
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data);
        setError(error.response.data.message);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser({
        email,
        password,
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="container__login">
        <div className="container__login-body">
          <div className="login-body__header">
            <span> Tài khoản của bạn</span>
          </div>
          <div className="error"> {error} </div>
          <form onSubmit={handleSubmit}>
            <div className="login-body__center">
              <div className="login">
                <div></div>
                <span>Email </span>
                <input
                  type="email"
                  className="fontAwesome"
                  placeholder=" Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div className="login">
                <span>Password </span>
                <input
                  type="password"
                  className="fontAwesome"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="login-body__bot">
              <button type="submit">Đăng nhập</button>
              <div className="login-body-bot__signup">
                <span>Tạo tài khoản của bạn?</span>
                <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "rgb(94, 132, 238" }}
                >
                  <button>Đăng ký</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
