import React from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Header from "../components/Header";
import '../css/home.css'
import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
const Home = () => {
  return (
    <>
      <div className="d-flex">
        <div xs={2} className="sidebar-wrapper">
          <Sidebar />
        </div>

        <div className="body-portfolio">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
