import React from "react";
import "../css/main.css";
import Carrousel from "./Carrousel";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHtml5,faReact,faCss3,faJs } from "@fortawesome/free-brands-svg-icons";
import { faDatabase,faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

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
            <FontAwesomeIcon icon={faHtml5} className="fs-1 me-4 text-danger"/>
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
            <FontAwesomeIcon icon={faCss3} className="fs-1 me-4 text-primary"/>
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
            <FontAwesomeIcon icon={faJs} className="fs-1 me-4 text-warning"/>
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
            <FontAwesomeIcon icon={faReact} className="fs-1 me-4 text-info"/>
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
            <FontAwesomeIcon icon={faDatabase} className="fs-1 me-4"/>
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
            <FontAwesomeIcon icon={faPeopleGroup} className="fs-1 me-4"/>
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
              Tecnicatura Universitaria en programación<br/>2023 - actualidad
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
                Front End Web Developer Bootcamp<br/>2022 - 2023
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
              Fullstack Mern Web Developer<br/>2022 - 2023
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
               Intermediate English Language B1.2<br/>2023
              </p>
            </div>
          </div>
          <hr />
          <p className="frase-motivadora">LA EDUCACIÓN NO ES PREPARACIÓN<br/>PARA LA VIDA, ES LA VIDA MISMA.</p>
        </div>
      </div>
      <div id="portfolio">
        <h3>PORTFOLIO</h3>
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
