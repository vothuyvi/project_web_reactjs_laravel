import React from "react";
import "../styles/cart.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const Cart = () => {
  return (
    <>
      <div className="body_cart">
        <h2>GIỎ HÀNG</h2>
        <table>
          <tr className="tr1">
            <th></th>
            <th>Sản phẩm</th>
            <th>Giá sản phẩm</th>
            <th className="quantity">Số lượng</th>
            <th>Thành tiền</th>
            <th></th>
          </tr>
          <tr className="tr2">
            <td>
              <img src="http://localhost/vtv/DOAN_WEB/images/product/b1.jpg"></img>
            </td>
            <td>Muối chấm Tây Ninh</td>
            <td>25,000VNĐ</td>
            <td className="quantity">
              <button>-</button>1<button>+</button>
            </td>
            <td>25,000VNĐ</td>
            <td className="delete">
              <p>X</p>
            </td>
          </tr>
          <tr className="tr2">
            <td>
              <img src="http://localhost/vtv/DOAN_WEB/images/product/b1.jpg"></img>
            </td>
            <td>Muối chấm Tây Ninh</td>
            <td>25,000VNĐ</td>
            <td className="quantity">
              <button>-</button>1<button>+</button>
            </td>
            <td>25,000VNĐ</td>
            <td className="delete">
              <p>X</p>
            </td>
          </tr>
          <tr className="tr3">
            <td></td>
            <td></td>
            <td></td>
            <td className="td_tt">Tổng tiền:</td>
            <td className="td_price">45,000VNĐ</td>
            <td className="td_btn">
              <button>Thanh toán</button>
            </td>
          </tr>
        </table>
        <div className="body_cart_bot"></div>
      </div>
    </>
  );
};
export default Cart;
