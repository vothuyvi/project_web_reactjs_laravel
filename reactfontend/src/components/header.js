import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../styles/header.css";
import Login from "../pages/login";
import Giavi from "../pages/giavi";
import { FaUserTie } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="header_logo">
        <div className="header_logo--left">
          <div className="logo_img">
            <img src="https://dhfoods.com.vn/vnt_upload/weblink/Logo_Dh_Foods.png" />
          </div>

          <div className="header_language">
            <div className="header_language--item">
              <img src="https://dhfoods.com.vn/vnt_upload/lang/flag-vn.svg" />
              <span> Tiếng Việt</span>
            </div>
            <div className="header_language--item">
              <img src="https://dhfoods.com.vn/vnt_upload/lang/flag-en.svg" />
              <span>English</span>
            </div>
            <div className="header_language--item">
              <img src="https://dhfoods.com.vn/vnt_upload/lang/flag-jp.svg" />
              <span>日本語</span>
            </div>
            <div className="header_language--item">
              <img src="https://dhfoods.com.vn/vnt_upload/lang/flag-kr.svg" />
              <span>한국어</span>
            </div>
            <div className="header_language--item">
              <img src="https://dhfoods.com.vn/vnt_upload/lang/flag-de.svg" />
              <span>Deutsch</span>
            </div>
          </div>
        </div>
        <div className="header_logo_right">
          <Link to="/login">
            <span>
              <FaUserTie />
            </span>
          </Link>
          <span>
            <FaEnvelope />
          </span>
          <span>
            <FaHeart />
          </span>
          <span>
            <FaShoppingCart />
          </span>
        </div>
      </div>
      
    </header>
  );
};
export default Header;
