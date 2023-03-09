import React, { useEffect, useState } from "react";
import "../styles/congthuc.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const Chitietcongthuc = (props) => {
  const { id } = useParams();
  useEffect(() => {
    getLoaiMon();
  }, [id]);
  const [loaiMon, setLoaiMon] = useState(null);
  useEffect(() => {
    getLoaiMon();
  }, []);

  const getLoaiMon = async () => {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/congthuc/${id}`
    );
    console.log(response);
    if (response) {
      setLoaiMon(response.data);
    }
  };
  return (
    <>
      {loaiMon &&
        loaiMon.monan.map((item, index) => {
          return (
            <div key={index} className="chitiet_congthuc">
              <h4>{item.tenmon}</h4>
              <div className="img">
                <img src={`http://127.0.0.1:8000/` + item.hinh}></img>
              </div>
              <div>{item.congthuc}</div>
            </div>
          );
        })}
    </>
  );
};
export default Chitietcongthuc;
