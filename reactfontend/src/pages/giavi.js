import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/main.css";
function Giavi() {
  return (
    
    <div className="container_giavi">
      <div className="giavi_list">
        <img src="http://lav2.gq/DOAN_WEB/images/product/m1.jpg"></img>
        <div className="name_sp">
          <span>Muối ớt Tây Ninh</span>
        </div>
        <div className="spice_sp">
          <span>25,000VNĐ</span>
        </div>
        <div className="btn_buy">
          <button>Mua hàng</button>
        </div>
      </div>
      <div className="giavi_list">
        <img src="http://lav2.gq/DOAN_WEB/images/product/m2.jpg"></img>
        <div className="name_sp">
          <span>Combo 2 hủ Natural Gia vị Dh Foods</span>
        </div>
        <div className="spice_sp">
          <span>25,000VNĐ</span>
        </div>
        <div className="btn_buy">
        <button>Mua hàng</button>
      </div>
      </div>
      <div className="giavi_list">
        <img src="http://lav2.gq/DOAN_WEB/images/product/u1.jpg"></img>
        <div className="name_sp">
          <span>Sốt Ướp Thịt BBQ 200gr Dh Foods</span>
        </div>
        <div className="spice_sp">
          <span>25,000VNĐ</span>
        </div>
        <div className="btn_buy">
        <button>Mua hàng</button>
      </div>
      </div>
      <div className="giavi_list">
        <img src="http://lav2.gq/DOAN_WEB/images/product/b1.jpg"></img>
        <div className="name_sp">
          <span>Combo 5 gói Natural Gia vị nấu Bò Kho Dh Foods</span>
        </div>
        <div className="spice_sp">
          <span>25,000VNĐ</span>
        </div>
        <div className="btn_buy">
        <button>Mua hàng</button>
      </div>
      </div>
      <div className="giavi_list">
        <img src="http://lav2.gq/DOAN_WEB/images/product/02.jpg"></img>
        <div className="name_sp">
          <span>NATURAL Tỏi Ngâm Giấm 150g - Dh Foods</span>
        </div>
        <div className="spice_sp">
          <span>25,000VNĐ</span>
        </div>
        <div className="btn_buy">
        <button>Mua hàng</button>
      </div>
      </div>
      <div className="giavi_list">
        <img src="http://lav2.gq/DOAN_WEB/images/product/m2.jpg"></img>
        <div className="name_sp">
          <span>Combo 2 hũ Ớt Bột Hàn Quốc 45gr Dh Foods</span>
        </div>
        <div className="spice_sp">
          <span>25,000VNĐ</span>
        </div>
        <div className="btn_buy">
          <button>Mua hàng</button>
        </div>
      </div>
    </div>
  );
}
export default Giavi;
