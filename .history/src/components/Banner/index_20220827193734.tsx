import { Col, Container, Row } from "react-bootstrap";

export function Banner() {
  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Olá! Bem vindo ao meu Portfólio</span>
            <h1>{`Oi estou codando`} <span className='wrap'>Dev.Front-End</span></h1>
          </Col>
        </Row>
      </Container>
    </section>
  )
}