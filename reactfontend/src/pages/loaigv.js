import React, { useEffect, useState } from "react";
import "../styles/giavi.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const Loaigiavi = (props) => {
  const { id } = useParams();

  useEffect(() => {
    getLoaiGiaVi();
  }, [id]);

  const [loaiGiaVi, setLoaiGiaVi] = useState(null);
  useEffect(() => {
    getLoaiGiaVi();
  }, []);
  const getLoaiGiaVi = async () => {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/loaigiavi/${id}`
    );
    console.log(response);
    if (response) {
      setLoaiGiaVi(response.data);
    }
  };
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
      <h4>{loaiGiaVi && loaiGiaVi.name_loai}</h4>
      <div className="container_giavi_new">
        {loaiGiaVi &&
          loaiGiaVi.giavi.map((item, index) => {
            return (
              <div key={index} className="giavi_list">
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
    </>
  );
};
export default Loaigiavi;
