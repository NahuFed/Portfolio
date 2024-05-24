import React from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Header from "../components/Header";
import '../css/home.css'
import { Col, Row } from "react-bootstrap";
const Home = () => {
  return (
    <>
      <div className="contenedor-principal">
        <div xs={2} className="sidebar-wrapper">
          <Header />
        </div>

        <div className="body-portfolio">          
          <Main />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
