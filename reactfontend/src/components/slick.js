import React, { Component } from "react";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/header.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slick = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const [giavi, setBestGiavi] = useState([]);
  const getBestGiavi = async () => {
    try {
      const giavi = await axios.get("http://127.0.0.1:8000/api/giavi/");
      setBestGiavi(giavi.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBestGiavi();
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
    <div className="container_slick">
      <Slider {...settings}>
        {giavi.map((item, index) => {
          return (
            <div className="img-best">
              <img src={`http://127.0.0.1:8000/` + item.img}></img>
              <p>{item.name}</p>
              <span>{formatMoney(item.price)} VNĐ</span>
              <div className="btn_buy">
                <button>Mua hàng</button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default Slick;
