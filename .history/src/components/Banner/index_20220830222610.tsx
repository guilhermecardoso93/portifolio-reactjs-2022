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
              Oi! Pode me chamar de Gui.
              Depois de 10 anos no mesmo emprego eu resolvi encontrar um novo caminho e a área de Desenvolvimento me pegou.
              Desde então já faz mais de um ano que comecei a estudar e o Front-End me conquistou.
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
