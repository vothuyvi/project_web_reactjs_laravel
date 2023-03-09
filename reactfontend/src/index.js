import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "../src/pages/home";
import Giavi from "../src/pages/giavi";
import Congthuc from "../src/pages/congthuc";
import Layout from "../src/pages/layout";
import Login from "./pages/login";
import Register from "./pages/register";
import Cart from "./pages/cart";
import Loaigiavi from "./pages/loaigv";
import Chitietcongthuc from "./pages/chitietcongthuc";

export default function Web() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="congthuc" element={<Congthuc />} />
          <Route path="giavi" element={<Giavi />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
          <Route path="loaigv/:id" element={<Loaigiavi />} />
          <Route path="chitietcongthuc/:id" element={<Chitietcongthuc />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Web />
  </React.StrictMode>
);
