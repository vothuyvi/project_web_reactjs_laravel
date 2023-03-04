import React from "react";
import ReactDOM from "react-dom";
import "../styles/footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaCcAmazonPay } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="socials-list">
          <p className="footer_name">Theo dõi DH_FOOD trên</p>
          <i>
            <FaFacebook /> Facebook
          </i>

          <i>
            <FaYoutube /> Youtube
          </i>
          <br></br>
          <i>
            <FaInstagram /> Instagram
          </i>

          <i>
            <FaLinkedin /> Linkedin
          </i>
          <div className="footer_name_contact">Thông tin liên hệ</div>
          <i>
            <FaEnvelope /> vothuyvi0305@gmail.com
          </i>
          <br></br>
          <i>
            <FaPhone />
            0947989570
          </i>
        </div>
        <div className="socials-list_center">
          <div className="footer_name_vc">
            Thanh toán
          </div>
          <p><FaMoneyBill /> Ví điện tử momo</p>
          <p><FaCcAmazonPay /> Ví VNPay</p>
          <p><FaCreditCard/> Thẻ ngân hàng</p>
          <p><FaCcVisa/> Thẻ VISA</p>
          <div className="footer_name_vc">
            Đơn vị vận chuyển
          </div>
          <p><FaCar /> Viettel Post</p>
          <p><FaCarAlt/> GHN</p>
        </div>
        <div className="socials-list_right">
          <img src= 'https://dhfoods.com.vn/vnt_upload/weblink/Logo_Dh_Foods.png'/>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
