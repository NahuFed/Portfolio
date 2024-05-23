import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer >
      <div className="d-flex justify-content-center flex-column align-items-center ">
        <div className="w-75">
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
