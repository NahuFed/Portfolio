import "../css/sidebar.css";

const Sidebar = () => {
  return (
    
    <div className="Sidebar">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      <ul className="SidebarList">
        
        <li>
          <a href="#acercademi" className="fila">
            <div className="icono"></div>
            <div className="titulos-sidebar fs-5">ACERCA DE MI</div>
          </a>
        </li>
        <li>
          <a href="#skills" className="fila">
            <div className="icono"></div>
            <div className="titulos-sidebar fs-5">SKILLS</div>
          </a>
        </li>
        <li>
          <a href="#educacion" className="fila">
            <div className="icono"></div>
            <div className="titulos-sidebar fs-5">EDUCACION</div>
          </a>
        </li>
        <li>
          <a href="#portfolio" className="fila">
            <div className="icono"></div>
            <div className="titulos-sidebar fs-5">PORTFOLIO</div>
          </a>
        </li>
        <li>
          <a href="#contacto" className="fila">
            <div className="icono"></div>
            <div className="titulos-sidebar fs-5">CONTACTO</div>
          </a>
        </li>
        
      </ul>
    </div>
  );
};

export default Sidebar;
