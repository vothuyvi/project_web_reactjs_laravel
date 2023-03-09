import { Outlet, Link } from "react-router-dom";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Nav from "../components/nav";
import "../styles/header.css";
const Layout = () => {
  return (
    <>
    <Header />
      <Nav />
      <Outlet />
      <Footer />
      
    </>
  );
};
export default Layout;
