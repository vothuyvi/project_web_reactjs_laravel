import React from "react";
import Slidersmall from "../components/slidersmall";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useRouter } from "react";
import "../styles/congthuc.css";
const Congthuc = () => {
  const [monan, setAllmon] = useState([]);

  async function getAllmon() {
    try {
      const monan = await axios.get("http://127.0.0.1:8000/api/all_cong-thuc/");
      setAllmon(monan.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAllmon();
  }, []);
  return (
    <>
      <Slidersmall />
      <h2>Món ngon</h2>
      <div className="body_congthuc">
        {monan.map((item, i) => {
          return (
            <div key={i} className="body_congthuc_list">
              <Link to={`/chitietcongthuc/${item.id}`}>
                <img src={`http://127.0.0.1:8000/` + item.hinh}></img>
              </Link>
              <Link
                to="/chitietcongthuc"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="body_congthuc_item">
                  <div className="name_body_congthuc">{item.tenmon}</div>
                  <div className="info_body_congthuc">{item.mota}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Congthuc;
