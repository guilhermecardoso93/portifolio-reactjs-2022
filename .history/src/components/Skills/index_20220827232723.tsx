import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./style.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 10,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

export function Skills() {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div>
              <h2>Conhecimento</h2>
              <p>Tecnologia estudadas nos últimos anos.</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div>
                  <a href="https://skillicons.dev">
                    <img src="https://skills.thijs.gg/icons?i=js" />
                  </a>
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
              </Carousel>
            </div>
            <div>
              <h2>Cursos</h2>
              <ul>
                <li>
                  <p>Rocketseat</p>
                  <p>2021 - Atualmente</p>
                  <p>ReactJs - Futuro ReactNative e NodeJs</p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
