import "../css/header.css";
import logo from "../assets/logo.png"

import { faGithub,faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const Header = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (link) => {
    setActiveLink(link);
  };
  return (
    <header>
    <label className="hamburger-menu">
      <input type="checkbox" />
    </label>
    <nav className="Sidebar">

      <ul className="SidebarList">
        
        <li>
        <a href="#" className="logo" >
          <img src={logo} alt="logo" />
        </a>

          <a href="#acercademi" className={`nav-link fila ${activeLink === '#acercademi' ? 'active' : ''}`}
              onClick={() => handleClick('#acercademi')}>
            <div className="icono"></div>
            <div className="titulos-sidebar fs-5">ACERCA DE MI</div>
          </a>
        </li>
        <li>
          <a href="#skills" className={`nav-link fila ${activeLink === '#skills' ? 'active' : ''}`}
              onClick={() => handleClick('#skills')}>
            <div className="icono"></div>
            <div className="titulos-sidebar fs-5">SKILLS</div>
          </a>
        </li>
        <li>
          <a href="#educacion" className={`nav-link fila ${activeLink === '#educacion' ? 'active' : ''}`}
              onClick={() => handleClick('#educacion')}>
            <div className="icono"></div>
            <div className="titulos-sidebar fs-5">EDUCACION</div>
          </a>
        </li>
        <li>
          <a href="#portfolio" className={`nav-link fila ${activeLink === '#portfolio' ? 'active' : ''}`}
              onClick={() => handleClick('#portfolio')}>
            <div className="icono"></div>
            <div className="titulos-sidebar fs-5">PORTFOLIO</div>
          </a>
        </li>
        <li>
          <a href="#contacto" className={`nav-link fila ${activeLink === '#contacto' ? 'active' : ''}`}
              onClick={() => handleClick('#contacto')}>
            <div className="icono"></div>
            <div className="titulos-sidebar fs-5">CONTACTO</div>
          </a>
        </li>
        <div className="redes d-flex justify-content-center gap-4 mt-5">
          <a href="https://www.linkedin.com/in/rodrigueznahuelfederico/" className="text-decoration-none text-black">
          <FontAwesomeIcon  icon={faLinkedin} className="fs-2" />
          </a>
          <a href="https://github.com/NahuFed"  className="text-decoration-none text-black">
          <FontAwesomeIcon  icon={faGithub} className="fs-2" />
          </a>
        </div>
        
      </ul>
    </nav>
    </header>
  );
};

export default Header;
