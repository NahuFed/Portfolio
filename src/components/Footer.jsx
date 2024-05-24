import React from "react";
import "../css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer >
      <div className="d-flex justify-content-center flex-column align-items-center ">
        
        <div className="w-75">
          <div className="d-flex justify-content-around">
        <div className="d-flex justify-content-center gap-4">
          <a href="https://www.linkedin.com/in/rodrigueznahuelfederico/" className="text-decoration-none text-black">
          <FontAwesomeIcon  icon={faLinkedin} className="fs-3 redes-footer" />
          </a>
          <a href="https://github.com/NahuFed"  className="text-decoration-none text-black">
          <FontAwesomeIcon  icon={faGithub} className="fs-3 redes-footer" />
          </a>
        </div>
        <img src={logo} alt="" className="logo-footer"/>
          </div>
        <hr />
        </div>
        <p className="text-center">
          Todos los derechos reservados
          <br /> &copy; 2024 Nahuel Rodriguez
        </p>
      </div>

    </footer>
  );
};

export default Footer;
