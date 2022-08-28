import { Col, Container, Row } from "react-bootstrap";

export function Banner() {
  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
          </Col>
        </Row>
      </Container>
    </section>
  )
}