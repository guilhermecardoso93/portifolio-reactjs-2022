import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";

import "../../App.css";
import "./style.css";

export function Banner() {
  return (
    <section className="banner" id="home">
      <div className="area">
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
            <Col xs={12} md={6} xl={7} className="bannerMain">
              <span className="tagline">Bem vindos ao meu Portfólio</span>
              <h1>Guilherme Cardoso</h1>
              <p>
                &nbsp;&nbsp;&nbsp; Oi! Pode me chamar de Gui. Depois de 10 anos no mesmo emprego eu
                resolvi encontrar um novo caminho e a área de Desenvolvimento me
                pegou. Desde então já faz mais de um ano que comecei a estudar e
                o Front-End me conquistou.
                <br />
                &nbsp;&nbsp;&nbsp; Estudei com vários caminhos e cursos diferentes com o da
                Rocketseat e CursoEmVideo, estou sempre participando dos eventos
                como NLW e DevWeek da Alura e o incrível Youtube. <br />
                &nbsp;&nbsp;&nbsp; Agora estou buscando um oportunidade para entrar no mercado de
                trabalho para crescer como profissional e como pessoa. Encontrar
                um empresa ou projeto que vai me fazer evoluir por completo.
              </p>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <div>
                <img src="https://www.github.com/guilhermecardoso93.png" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
