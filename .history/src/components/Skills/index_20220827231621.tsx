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
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
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
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
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
          </Col>
        </Row>
      </Container>
    </section>
  );
}
