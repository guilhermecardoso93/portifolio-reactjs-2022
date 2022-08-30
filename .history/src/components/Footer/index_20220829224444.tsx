import { Col, Container, Row } from "react-bootstrap";
import Logo from "../../assets/logo2.png";

export function Footer() {
  return (
    <section className="footer">
      <Container>
        <Row className='align-items-center'>
          <Col sm={6}>
          <img src={Logo} alt='Meu logo com minhas iniciais em preto e branco G e C'/>
          </Col>
        </Row>
      </Container>

    </section>
  )
}