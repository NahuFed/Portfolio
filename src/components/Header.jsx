import "../css/header.css";
import logo from "../assets/logo.png"
const Header = () => {
  return (
    <>
    <label className="hamburger-menu">
      <input type="checkbox" />
    </label>
    <nav className="Sidebar">

      <ul className="SidebarList">
        
        <li>
        <a href="#" className="logo" >
          <img src={logo} alt="logo" />
        </a>

          <a href="#acercademi" className="nav-link fila">
            <div className="icono"></div>
            <div className="titulos-sidebar fs-5">ACERCA DE MI</div>
          </a>
        </li>
        <li>
          <a href="#skills" className="nav-link fila">
            <div className="icono"></div>
            <div className="titulos-sidebar fs-5">SKILLS</div>
          </a>
        </li>
        <li>
          <a href="#educacion" className="nav-link fila">
            <div className="icono"></div>
            <div className="titulos-sidebar fs-5">EDUCACION</div>
          </a>
        </li>
        <li>
          <a href="#portfolio" className="nav-link fila">
            <div className="icono"></div>
            <div className="titulos-sidebar fs-5">PORTFOLIO</div>
          </a>
        </li>
        <li>
          <a href="#contacto" className="nav-link fila">
            <div className="icono"></div>
            <div className="titulos-sidebar fs-5">CONTACTO</div>
          </a>
        </li>
        
      </ul>
    </nav>
    </>
  );
};

export default Header;
