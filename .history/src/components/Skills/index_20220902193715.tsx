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
              <h2>Tecnologias</h2>
              <p>Tecnologia estudadas nos 2 anos.</p>
              <div className="skill-slider">
                <div>
                  <div>
                    <img src="https://skills.thijs.gg/icons?i=js" />
                  </div>
                  <div>
                    <img src="https://skills.thijs.gg/icons?i=ts" />
                  </div>
                  <div>
                    <img src="https://skills.thijs.gg/icons?i=html" />
                  </div>
                  <div>
                    <img src="https://skills.thijs.gg/icons?i=css" />
                  </div>
                </div>
                <div>
                  <div>
                    <img src="https://skills.thijs.gg/icons?i=react" />
                  </div>
                  <div>
                    <img src="https://skills.thijs.gg/icons?i=tailwind" />
                  </div>
                  <div>
                    <img src="https://skills.thijs.gg/icons?i=bootstrap" />
                  </div>
                  <div>
                    <img src="https://skills.thijs.gg/icons?i=sass" />
                  </div>
                  <div>
                    <img src="https://skills.thijs.gg/icons?i=styledcomponents" />
                  </div>
                </div>
              </div>
            </div>
            <div className="cursos">
              <h2>Cursos</h2>
              <div>
                <ul>
                  <li>
                    <h4>Rocketseat</h4>
                    <p>2021 - Atualmente <br/>ReactJs - Futuro ReactNative e NodeJs</p>
                  </li>
                  <li>
                    <h4>Curso em Video</h4>
                    <p>2021 - 2022 <br/> HTML5 - CSS3 - Javascript </p>
                  </li>
                  <li>
                    <h4>ImagineSchool</h4>
                    <p>2021 - 2021 <br/>HTML5 - CSS3 - Javascript </p>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <h4>UNOPAR - Universidade Norte do Paraná</h4>
                    <p>2018 - 2020<br/>Técnico em Logística</p>
                  </li>
                  <li>
                    <h4>CNA - Escola de Idiomas</h4>
                    <p>2011 - 2016<br/>Inglês</p>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
