import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';

import "../../App.css";
import "./style.css";

export function Banner() {
  return (
    <section className="banner" id="home">
      <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} className='bannerMain'>
            <span className="tagline">Bem vindos ao meu Portfólio</span>
            <h1>Guilherme Cardoso</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
              nostrum eum nihil atque ducimus voluptatem animi mollitia dicta
              alias reiciendis, voluptatibus repudiandae laudantium ullam
              aspernatur, dolore similique eius deserunt fugiat.
            </p>
            
          </Col>
          <Col xs={12} md={6} xl={5}>
          <TrackVisibility>
              {({ isVisible }:any) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                   <img src="https://www.github.com/guilhermecardoso93.png" />
                </div>}
            </TrackVisibility>
           
          </Col>
        </Row>
      </Container>
      </div >
    </section>
  );
}
