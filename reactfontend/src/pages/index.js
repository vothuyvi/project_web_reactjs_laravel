import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Giavi from "../pages/giavi";
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Slider from "../components/slider";
function Main() {
  return (
    <div className="Main">
      <Header />
      <Nav />
      <Slider />
      <Routes>
        <Route path="/" element={<index />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <div className="container">
        <div>
          <Routes>
            <Route path="/" element={<index />} />
            <Route path="/giavi" element={<Giavi />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Main;
