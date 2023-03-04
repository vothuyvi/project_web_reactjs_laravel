import React from "react";
import "../styles/header.css";
import { FaSearch } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { Routes, Route, Link } from "react-router-dom";
import Giavi from "../pages/giavi";
const Nav = () => {
  return (
    <div className="header_top">
      <div className="header_left">
        <span>TRANG CHỦ</span>
        <span>
          CÔNG THỨC NẤU ĂN
          <div className="subnav">
            <span> Món bánh </span>
            <span> Món ăn gia đình</span>
            <span> Món ăn tiệc</span>
            <span> Thông tin khóa học</span>
          </div>
        </span>
        <span>
          GIA VỊ CHUẨN NHÀ
          <div className="subnav">
            <Link to="/giavi">
              <span>Gia vị nhà Food</span>
            </Link>
            <span> Muối châm Tây Ninh</span>
            <span> Gia vị tự nhiên</span>
            <span> Gia vị nấu và ướp</span>
            <span> Gia vị hoàn chỉnh</span>
            <span> Nước sốt chấm</span>
          </div>
        </span>
        <span> CHĂM SÓC KHÁCH HÀNG</span>
      </div>
      <div className="header_right">
        <input
          type="search"
          className="nhap"
          placeholder=" Nhập nội dung tìm kiếm ...! "
        ></input>
        <button className="tim">
          <FaSearch />
        </button>
        <FaMicrophone />
      </div>
    </div>
  );
};

export default Nav;
