import { Col, Container, Row } from "react-bootstrap";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export function Skills() {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Conhecimento</h2>
              <p>Tecnologia estudadas nos últimos anos.</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div>
                    <a href="https://skillicons.dev">
                      <img src="https://skills.thijs.gg/icons?i=js" />
                    </a>
                </div>
                <div>
                    <a href="https://skillicons.dev">
                      <img src="https://skills.thijs.gg/icons?i=js" />
                    </a>
                </div>
                <div>
                    <a href="https://skillicons.dev">
                      <img src="https://skills.thijs.gg/icons?i=js" />
                    </a>
                </div>
                <div>
                    <a href="https://skillicons.dev">
                      <img src="https://skills.thijs.gg/icons?i=js" />
                    </a>
                </div>
                <div>
                    <a href="https://skillicons.dev">
                      <img src="https://skills.thijs.gg/icons?i=js" />
                    </a>
                </div>
                <div>
                    <a href="https://skillicons.dev">
                      <img src="https://skills.thijs.gg/icons?i=js" />
                    </a>
                </div>
                <div>
                    <a href="https://skillicons.dev">
                      <img src="https://skills.thijs.gg/icons?i=js" />
                    </a>
                </div>
                <div>
                    <a href="https://skillicons.dev">
                      <img src="https://skills.thijs.gg/icons?i=js" />
                    </a>
                </div>
                <div>
                    <a href="https://skillicons.dev">
                      <img src="https://skills.thijs.gg/icons?i=js" />
                    </a>
                </div>
                <div>
                    <a href="https://skillicons.dev">
                      <img src="https://skills.thijs.gg/icons?i=js" />
                    </a>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
