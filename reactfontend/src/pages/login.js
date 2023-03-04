import React from "react";
import "../styles/login.css";

function Login() {
  return (
    <div className="container__login">
      <div className="container__login-body">
        <div className="login-body__header">
          <span> Login</span>
        </div>
        <div className="login-body__center">
          <input
            type="email"
            className="fontAwesome"
            placeholder=" &#xf0e0; Enter your email"
          ></input>
          <input
            type="password"
            className="fontAwesome"
            placeholder="&#xf023; Enter your password"
          ></input>
        </div>
        <div className="login-body__bot">
          <button>Sign In</button>
          <div className="login-body-bot__signup">
          <Router-link to="register"></Router-link>
            <span>Create your account?</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
