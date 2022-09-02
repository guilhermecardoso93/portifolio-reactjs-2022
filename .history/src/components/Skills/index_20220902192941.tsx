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
   
   [![GitHub Streak](http://github-readme-streak-stats.herokuapp.com?user=GuilhermeCardoso93&theme=tokyonight&hide_border=true&border=DD2E7F)](https://git.io/streak-stats)
      
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
