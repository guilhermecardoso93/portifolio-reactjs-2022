import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

import "./style.css";


export function Skills() {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col className="skill-box">
            <div>
              <h2>Conhecimento</h2>
              <p>Tecnologia estudadas nos últimos anos.</p>
              <div className="skill-slider">
                <div>
                    <img src="https://skills.thijs.gg/icons?i=js" />
                </div>
                <div>
                  <a href="https://skillicons.dev">
                    <img src="https://skills.thijs.gg/icons?i=ts" />
                  </a>
                </div>
                <div>
                  <a href="https://skillicons.dev">
                    <img src="https://skills.thijs.gg/icons?i=html" />
                  </a>
                </div>
                <div>
                  <a href="https://skillicons.dev">
                    <img src="https://skills.thijs.gg/icons?i=css" />
                  </a>
                </div>
                <div>
                  <a href="https://skillicons.dev">
                    <img src="https://skills.thijs.gg/icons?i=react" />
                  </a>
                </div>
                <div>
                  <a href="https://skillicons.dev">
                    <img src="https://skills.thijs.gg/icons?i=tailwind" />
                  </a>
                </div>
                <div>
                  <a href="https://skillicons.dev">
                    <img src="https://skills.thijs.gg/icons?i=bootstrap" />
                  </a>
                </div>
                <div>
                  <a href="https://skillicons.dev">
                    <img src="https://skills.thijs.gg/icons?i=sass" />
                  </a>
                </div>
                <div>
                  <a href="https://skillicons.dev">
                    <img src="https://skills.thijs.gg/icons?i=styledcomponents" />
                  </a>
                </div>
              </div>
            </div>
            <div className="cursos">
              <h2>Cursos</h2>
              <ul>
                <li>
                  <h3>Rocketseat</h3>
                  <p>2021 - Atualmente</p>
                  <p>ReactJs - Futuro ReactNative e NodeJs</p>
                </li>
                <li>
                  <h3>Curso em Video</h3>
                  <p>2021 - 2022</p>
                  <p>HTML5 - CSS3 - Javascript </p>
                </li>
                <li>
                  <h3>ImagineSchool</h3>
                  <p>2021 - 2021</p>
                  <p>HTML5 - CSS3 - Javascript </p>
                </li>
                <li>
                  <h3>UNOPAR - Universidade Norte do Paraná</h3>
                  <p>2018 - 2020</p>
                  <p>Técnico em Logística</p>
                </li>
                <li>
                  <h3>CNA - Escola de Idiomas</h3>
                  <p>2011 - 2016</p>
                  <p>Inglês</p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
