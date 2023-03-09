import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordconfirmation, setConfirm] = useState();
  const [error, setError] = useState();

  const registerUser = async () => {
    axios
      .post("http://127.0.0.1:8000/api/register", {
        email: email,
        password: password,
        passwordconfirmation: passwordconfirmation,
      })
      .then((response) => {
        const {
          data: { data: user },
        } = response;
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data);
        setError(error.response.data.errors);
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({
        email,
        password,
        passwordconfirmation,
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
            <span> Mới đến DH FOOD</span>
          </div>
           {error&&
            Object.keys(error).map(key => (
              <div className="error"> {error[key][0]} </div>
            ))
           }
          <form onSubmit={handleSubmit}>
            <div className="login-body__center">
              <div className="login">
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
              <div className="login">
                <span>Password </span>
                <input
                  type="password"
                  className="fontAwesome"
                  placeholder="Comfirmation your password"
                  onChange={(e) => setConfirm(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="login-body__bot">
              <button type="submit">Đăng ký</button>
              <div className="login-body-bot__signup">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "rgb(94, 132, 238" }}
                >
                  <button>Quay lại</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
