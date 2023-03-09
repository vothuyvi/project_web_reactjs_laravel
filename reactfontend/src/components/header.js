import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../styles/header.css";
import { FaUserTie } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";

const Header = () => {
  return (
    <>
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
            <label for="cart">
              <span>
                <FaShoppingCart />
              </span>
            </label>
          </div>
        </div>
        <input type="checkbox" id="cart"></input>
        <div className="header_cart_model">
          <div className="header_cart_model--title">
            <label for="cart">
              <span>X</span>
            </label>
          </div>

          <div className="cart_list">
            <div className="cart_item">
              <table width="100%">
                <tr className="">
                  <th>Hình ảnh</th>
                  <th>Tên</th>
                  <th>Số lượng</th>
                  <th>Xóa SP</th>
                </tr>
                <tr className="tr2">
                  <td>
                    <img src="http://localhost/vtv/DOAN_WEB/images/product/bot.jpg"></img>
                  </td>
                  <td>Muối chấm Tây Ninh nhaaaaaa</td>
                  <td>1</td>
                  <td className="xoa">
                    <p>X</p>
                  </td>
                </tr>
                <tr className="tr2">
                  <td>
                    <img src="http://localhost/vtv/DOAN_WEB/images/product/02.jpg"></img>
                  </td>
                  <td>Muối chấm Tây Ninh nhaaaaaa</td>
                  <td>1</td>
                  <td className="xoa">
                    <p>X</p>
                  </td>
                </tr>
                <tr className="tr2">
                  <td>
                    <img src="http://localhost/vtv/DOAN_WEB/images/product/02.jpg"></img>
                  </td>
                  <td>Muối chấm Tây Ninh nhaaaaaa</td>
                  <td>1</td>
                  <td className="xoa">
                    <p>X</p>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="header_cart-bot">
            <div className="cart_bot_btn">
              <Link to="/cart">
                <button>Xem giỏ hàng</button>
              </Link>
            </div>
            <div className="cart_bot_tt">
              <p>Tổng: 25,000VNĐ</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
