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
        <Link
          to="/"
          style={{ textDecoration: "none", color: "rgb(94, 132, 238" }}
        >
          <span>TRANG CHỦ</span>
        </Link>
        <span>
          <Link
            to="/congthuc"
            style={{ textDecoration: "none", color: "rgb(94, 132, 238" }}
          >
            <span>CÔNG THỨC NẤU ĂN</span>{" "}
          </Link>
          <div className="subnav">
            <Link
              to="/congthuc"
              style={{ textDecoration: "none", color: "rgb(94, 132, 238" }}
            >
              <span> Món bánh </span>
            </Link>
            <Link
              to="/congthuc"
              style={{ textDecoration: "none", color: "rgb(94, 132, 238" }}
            >
              <span> Món ăn gia đình</span>
            </Link>

            <Link
              to="/congthuc"
              style={{ textDecoration: "none", color: "rgb(94, 132, 238" }}
            >
              {" "}
              <span> Món ăn tiệc</span>
            </Link>

            <Link
              to="/congthuc"
              style={{ textDecoration: "none", color: "rgb(94, 132, 238" }}
            >
              <span> Thông tin khóa học</span>
            </Link>
          </div>
        </span>
        <span>
          <Link
            to="/giavi"
            style={{ textDecoration: "none", color: "rgb(94, 132, 238" }}
          >
            <span>GIA VỊ CHUẨN NHÀ</span>{" "}
          </Link>
          <div className="subnav">
            <Link
              to="/loaigv"
              style={{ textDecoration: "none", color: "rgb(94, 132, 238" }}
            >
              <span> Muối châm Tây Ninh</span>
            </Link>
            <Link
              to="/loaigv"
              style={{ textDecoration: "none", color: "rgb(94, 132, 238" }}
            >
              <span> Sốt chấm</span>
            </Link>

            <Link
              to="/loaigv"
              style={{ textDecoration: "none", color: "rgb(94, 132, 238" }}
            >
              <span> Gia vị nấu và ướp</span>
            </Link>

            <Link
              to="/loaigv"
              style={{ textDecoration: "none", color: "rgb(94, 132, 238" }}
            >
              <span> Gia vị hoàn chỉnh</span>
            </Link>

            <Link
              to="/loaigv"
              style={{ textDecoration: "none", color: "rgb(94, 132, 238" }}
            >
              <span> Rau củ ngâm</span>
            </Link>

            <Link
              to="/loaigv"
              style={{ textDecoration: "none", color: "rgb(94, 132, 238" }}
            >
              <span>Muối chấm</span>
            </Link>

            <Link
              to="/loaigv"
              style={{ textDecoration: "none", color: "rgb(94, 132, 238" }}
            >
              <span> Gia vị tự nhiên</span>
            </Link>

            <Link
              to="/loaigv"
              style={{ textDecoration: "none", color: "rgb(94, 132, 238" }}
            >
              <span> Sa tế</span>
            </Link>

            <Link
              to="/loaigv"
              style={{ textDecoration: "none", color: "rgb(94, 132, 238" }}
            >
              <span> Mắm đặc sản Phú Quốc</span>
            </Link>

            <Link
              to="/loaigv"
              style={{ textDecoration: "none", color: "rgb(94, 132, 238" }}
            >
              <span> Nước mắm Phú Quốc</span>
            </Link>
          </div>
        </span>
        <Link
          to=""
          style={{ textDecoration: "none", color: "rgb(94, 132, 238" }}
        >
          <span> CHĂM SÓC KHÁCH HÀNG</span>
        </Link>
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
        <div className="tim">
          <FaMicrophone />
        </div>
      </div>
    </div>
  );
};

export default Nav;
