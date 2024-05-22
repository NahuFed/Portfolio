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

const Main = () => {
  return (
    <main>
      <Carrousel />

      <div id="acercademi">
        <div className="w-25 informacion">
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
          <div className="col-4 d-flex">
            <div>
              <FontAwesomeIcon
                icon={faHtml5}
                className="fs-1 me-4 text-danger"
              />
            </div>
            <div>
              <h5>HTML 5</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
                deleniti magni, quos laborum iure quod quia architecto fugit
                commodi doloribus.
              </p>
            </div>
          </div>
          <div className="col-4 d-flex">
            <div>
              <FontAwesomeIcon
                icon={faCss3}
                className="fs-1 me-4 text-primary"
              />
            </div>
            <div>
              <h5>CSS 3</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
                deleniti magni, quos laborum iure quod quia architecto fugit
                commodi doloribus.
              </p>
            </div>
          </div>
          <div className="col-4 d-flex">
            <div>
              <FontAwesomeIcon icon={faJs} className="fs-1 me-4 text-warning" />
            </div>
            <div>
              <h5>JAVASCRIPT</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
                deleniti magni, quos laborum iure quod quia architecto fugit
                commodi doloribus.
              </p>
            </div>
          </div>
          <div className="col-4 d-flex">
            <div>
              <FontAwesomeIcon icon={faReact} className="fs-1 me-4 text-info" />
            </div>
            <div>
              <h5>REACT</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
                deleniti magni, quos laborum iure quod quia architecto fugit
                commodi doloribus.
              </p>
            </div>
          </div>
          <div className="col-4 d-flex">
            <div>
              <FontAwesomeIcon icon={faDatabase} className="fs-1 me-4" />
            </div>
            <div>
              <h5>SQL</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
                deleniti magni, quos laborum iure quod quia architecto fugit
                commodi doloribus.
              </p>
            </div>
          </div>
          <div className="col-4 d-flex">
            <div>
              <FontAwesomeIcon icon={faPeopleGroup} className="fs-1 me-4" />
            </div>
            <div>
              <h5>SCRUM</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
                deleniti magni, quos laborum iure quod quia architecto fugit
                commodi doloribus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="educacion">
        <h3>EDUCACION</h3>
        <div className="row p-5 g-5 w-75">
          <hr />
          <div className="col-6 d-flex">
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
          <div className="col-6 d-flex">
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

          <div className="col-6 d-flex">
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
          <div className="col-6 d-flex">
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
        <div className="row p-5 gy-5">
          <div className="col-6">
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
          <div className="col-6">
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
          <div className="col-6">
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
          <div className="col-6">
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
          <div className="col-6">
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
          <div className="col-6">
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
      <div id="contacto">
        <h3>CONTACTO</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          expedita eius, aspernatur vitae quo commodi alias id atque,
          necessitatibus ea praesentium reiciendis culpa vero voluptatem eos
          ducimus quia asperiores ipsam eligendi blanditiis! Cum dicta officiis
          nemo animi assumenda! Provident molestiae reiciendis quasi ut velit
          fugit, aspernatur dignissimos vero laborum debitis suscipit sapiente
          optio totam, quibusdam pariatur eum necessitatibus ipsam voluptatibus
          similique? Explicabo quos dolore minus vitae temporibus earum,
          voluptas iusto in quas quod suscipit aut, repellendus culpa dolores!
          Dolor, aut. Ad aliquam quaerat nam aliquid, alias odit incidunt quidem
          numquam reprehenderit facere obcaecati ipsam, eos ab sequi inventore.
          Ex, quibusdam!
        </p>
      </div>
    </main>
  );
};

export default Main;
