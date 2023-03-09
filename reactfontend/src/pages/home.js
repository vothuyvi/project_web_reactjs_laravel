import React from "react";
import { ReactDOM } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/home.css";
import Slider from "../components/slider";
import Slick from "../components/slick";
import Slidersmall from "../components/slidersmall";
import { Link } from "react-router-dom";
const Home = () => {
  const [giavi, setGiavi] = useState([]);
  async function getNewGiavi() {
    try {
      const giavi = await axios.get("http://127.0.0.1:8000/api/gia-vi/");
      setGiavi(giavi.data);
    } catch (error) {
      console.log(error);
    }
  }
  //  getNewGiavi();
  useEffect(() => {
    getNewGiavi();
  }, []);
  const [monan, setMonan] = useState([]);
  async function getMonan() {
    try {
      const monan = await axios.get("http://127.0.0.1:8000/api/cong-thuc-moi/");
      setMonan(monan.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getMonan();
  }, []);

  const formatMoney = (money) => {
    return money
      .toLocaleString("en-US", {
        style: "currency",
        currency: "VND",
      })
      .replace("₫", "");
  };
  return (
    <>
      <Slider />
      <div className="container_giavi">
        <div className="giavi_title">
          <h3> SẢN PHẨM MỚI CỦA NHÀ DH_FOOD</h3>
          <p>Giúp gia đình bạn đa dạng trong món ăn</p>
        </div>
        <div className="container_giavi_new">
          {giavi.map((item, i) => {
            return (
              <div key={i} className="giavi_list">
                <img src={`http://127.0.0.1:8000/` + item.img}></img>
                <div className="name_sp">
                  <span>{item.name}</span>
                </div>
                <div className="spice_sp">
                  <span>{formatMoney(item.price)} VNĐ</span>
                </div>
                <div className="btn_buy">
                  <button>Mua hàng</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="giavi_title">
          <h3> SẢN PHẨM BÁN CHẠY CỦA NHÀ DH_FOOD</h3>
          <p>Giúp gia đình bạn đa dạng trong món ăn</p>
        </div>
        <div className="container_giavi_best">
          <Slick />
        </div>
      </div>
      <div className="container_congthuc">
        <div className="giavi_title">
          <h3> MÓN NGON CỦA NHÀ DH_FOOD</h3>
          <p>Giúp gia đình bạn đa dạng trong món ăn</p>
        </div>
        <div className="container_congthuc--left">
          <Slidersmall />
        </div>
        <div className="container_congthuc--right">
          {monan.map((item, i) => {
            return (
              <div key={i} className="congthuc_list">
                <Link to={`/chitietcongthuc/${item.id}`}>
                  <img src={`http://127.0.0.1:8000/` + item.hinh}></img>
                </Link>
                <Link
                  to={`/chitietcongthuc/${item.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="name_congthuc">{item.tenmon}</div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
