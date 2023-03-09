import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/giavi.css";
const Giavi = () => {
  const [giavi, setAllLoaigiavi] = useState([]);
  async function getAllLoaigiavi() {
    try {
      const giavi = await axios.get("http://127.0.0.1:8000/api/loai-gia-vi/");
      setAllLoaigiavi(giavi.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAllLoaigiavi();
  }, []);
  return (
    <>
      <h2>SẢN PHẨM</h2>
      <div className="container_giavi_loai">
        {giavi.map((item, i) => {
          return (
            <div key={i} className="giavi_list_loai">
              <Link to={`/loaigv/${item.id}`} params={{ id: item.id }}>
                <img src={`http://127.0.0.1:8000/` + item.img}></img>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Giavi;
