import React from "react";
import "../css/main.css";
import Carrousel from "./Carrousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faReact,
  faCss3,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import colores from "../assets/colores.png";
import formulario from "../assets/formulario.png";
import peliculas from "../assets/peliculas.png";
import noticias from "../assets/noticias.png";
import clima from "../assets/clima.png";
import goldenvet from "../assets/goldenvet.png";
import { faLocationDot, faClipboard } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <main>
      <Carrousel />

      <div id="acercademi">
        <div className="informacion">
          <h3>ACERCA DE MI</h3>
          <p>
            Hola, soy un desarollador Frontend de Tucumán, Argentina. Estoy
            cursando el ultimo año de la tecnicatura universitaria en
            programación en la Universidad Tecnológica Nacional - FRT
          </p>
          <ul className="datospersonales">
            <li>
              <span className="texto">Nombre:</span>Nahuel Rodriguez
            </li>
            <li>
              <span className="texto">Email:</span>nahufed@gmail.com
            </li>
            <li>
              <span className="texto">Telefono:</span>(381)-620-5792
            </li>
            <li>
              <span className="texto">Nacionalidad:</span>Argentina
            </li>
          </ul>
          <a className="btn btn-dark rounded-0 p-3 mt-5" href="#">
            DESCARGAR CURRICULUM
          </a>
        </div>
      </div>
      <div id="skills">
        <h3>SKILLS</h3>
        <div className="row p-5 g-5">
          <div className="col-6 col-md-4 skill">
            <div >
              <FontAwesomeIcon 
                icon={faHtml5}
                className="skill-icon text-danger"
              />
            </div>
            <div>
              <h5>HTML 5</h5>
              <p>
              Lenguaje de marcado para estructurar y presentar contenido web.
              </p>
            </div>
          </div>
          <div className="col-6 col-md-4 skill">
            <div >
              <FontAwesomeIcon 
                icon={faCss3}
                className="skill-icon text-primary"
              />
            </div>
            <div>
              <h5>CSS 3</h5>
              <p>
              Hojas de estilo para el diseño visual y la adaptabilidad de sitios web.
              </p>
            </div>
          </div>
          <div className="col-6 col-md-4 skill">
            <div >
              <FontAwesomeIcon  icon={faJs} className="skill-icon text-warning" />
            </div>
            <div>
              <h5>JAVASCRIPT</h5>
              <p>
              Lenguaje de programación para interactividad y dinamismo en páginas web.
              </p>
            </div>
          </div>
          <div className="col-6 col-md-4 skill">
            <div >
              <FontAwesomeIcon  icon={faReact} className="skill-icon text-info" />
            </div>
            <div>
              <h5>REACT</h5>
              <p>
              Biblioteca de JavaScript para construir interfaces de usuario interactivas.
              </p>
            </div>
          </div>
          <div className="col-6 col-md-4 skill">
            <div >
              <FontAwesomeIcon  icon={faDatabase} className="skill-icon" />
            </div>
            <div>
              <h5>SQL</h5>
              <p>
              Lenguaje de consulta para gestionar y manipular bases de datos relacionales.
              </p>
            </div>
          </div>
          <div className="col-6 col-md-4 skill">
            <div >
              <FontAwesomeIcon  icon={faPeopleGroup} className="skill-icon" />
            </div>
            <div>
              <h5>SCRUM</h5>
              <p>
              Marco de trabajo ágil para proyectos que evolucionan rápidamente.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="educacion">
        <h3>EDUCACION</h3>
        <div className="row p-5 g-5 w-75">
          <hr />
          <div className="col-md-6 d-flex">
            <div>
              <span>01</span>
            </div>
            <div>
              <h5>Universidad Tecnologica Nacional</h5>
              <p>
                Tecnicatura Universitaria en programación
                <br />
                2023 - actualidad
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <div>
              <span>02</span>
            </div>
            <div>
              <h5>MindHub</h5>
              <p>
                Front End Web Developer Bootcamp
                <br />
                2022 - 2023
              </p>
            </div>
          </div>

          <div className="col-md-6 d-flex">
            <div>
              <span>03</span>
            </div>
            <div>
              <h5>RollingCode School</h5>
              <p>
                Fullstack Mern Web Developer
                <br />
                2022 - 2023
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <div>
              <span>04</span>
            </div>
            <div>
              <h5>Centro Universitario de idiomas</h5>
              <p>
                Intermediate English Language B1.2
                <br />
                2023
              </p>
            </div>
          </div>
          <hr />
          <p className="frase-motivadora">
            LA EDUCACIÓN NO ES PREPARACIÓN
            <br />
            PARA LA VIDA, ES LA VIDA MISMA.
          </p>
        </div>
      </div>
      <div id="portfolio">
        <h3>PORTFOLIO</h3>
        <div className="row px-md-5 py-5 gy-5">
          <div className="col-md-6 d-flex justify-content-center">
            <a  href="https://ejercicio6react-nahuel-rodriguez.netlify.app/" className="tarjeta">
              <img src={colores}></img>
              <div className="tarjeta-body">
                <div className="tarjeta-titulo">
                  <h5>COLORES</h5>
                </div>
                <div className="tarjeta-texto">
                  <p>REACT</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <a  href="https://ejercicio8react-nahuel-rodriguez.netlify.app/" className="tarjeta">
              <img src={formulario}></img>
              <div className="tarjeta-body">
                <div className="tarjeta-titulo">
                  <h5>FORMULARIO CON VALIDACIONES</h5>
                </div>
                <div className="tarjeta-texto">
                  <p>REACT</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <a  href="https://ejercicio10react-nahuel-rodriguez.netlify.app/" className="tarjeta">
              <img src={peliculas}></img>
              <div className="tarjeta-body">
                <div className="tarjeta-titulo">
                  <h5>FORMULARIO PELICULAS</h5>
                </div>
                <div className="tarjeta-texto">
                  <p>REACT</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <a  href="https://ejercicio12react-nahuel-rodriguez.netlify.app/" className="tarjeta">
              <img src={noticias}></img>
              <div className="tarjeta-body">
                <div className="tarjeta-titulo">
                  <h5>BLOG DE NOTICIAS</h5>
                </div>
                <div className="tarjeta-texto">
                  <p>REACT</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <a  href="https://goldenvet.netlify.app/" className="tarjeta">
              <img src={goldenvet}></img>
              <div className="tarjeta-body">
                <div className="tarjeta-titulo">
                  <h5>GOLDENVET VETERINARIA</h5>
                </div>
                <div className="tarjeta-texto">
                  <p>MERN</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <a  href="https://ejercicio13react-nahuel-rodriguez.netlify.app/" className="tarjeta">
              <img src={clima}></img>
              <div className="tarjeta-body">
                <div className="tarjeta-titulo">
                  <h5>PAGINA DEL CLIMA</h5>
                </div>
                <div className="tarjeta-texto">
                  <p>REACT</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div id="contacto" >
        <h3>CONTACTO</h3>

          <div className="px-md-5 py-5">
          <div className="info-contacto row">
            <div className="col-6 d-flex">
            <FontAwesomeIcon icon={faLocationDot} className="fs-1 me-3"/>
            <p>AV CONSTITUCIÓN 2800,<br/> TAFI VIEJO, TUCUMÁN.</p>
            </div>
            <div className="col-6 d-flex">
            <FontAwesomeIcon icon={faClipboard} className="fs-1 me-3"/>
            <p>CONSULTAS GENERALES<br/>nahufed@gmail.com</p>
            </div>
          </div>
          <form action="" className="formulario-contacto">
              <input type="text" placeholder="*TU NOMBRE"/>
              <input type="text" placeholder="*TU EMAIL"/>
              <select name="interes" placeholder="*">
                <option value = ''>EN QUE ESTAS INTERESADO</option>
                <option value = 'Desarrollo'>Desarrollo Web Personalizado</option>
                <option value = 'Colaboracion'>Colaboración en Proyectos</option>
                <option value = 'Reclutamiento'>Reclutamiento o Contratación</option>
                <option value = 'Consultoria'>Consultoría o Asesoramiento Técnico</option>                
                </select>
                <textarea name="mensaje" placeholder="*TU MENSAJE" rows='5' cols = '40'/>
                <button type="submit" className="btn btn-dark w-25 rounded-0 p-3">ENVIAR</button>
          </form>
      </div>
      </div>
    </main>
  );
};

export default Main;
