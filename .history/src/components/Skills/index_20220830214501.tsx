import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./style.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 2 // optional, default to 1.
  }
};

export function Skills(this: any) {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col className="skill-box">
            <div>
              <h2>Conhecimento</h2>
              <p>Tecnologia estudadas nos últimos anos.</p>
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                //autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                //deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
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
            <div className='cursos'>
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
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
