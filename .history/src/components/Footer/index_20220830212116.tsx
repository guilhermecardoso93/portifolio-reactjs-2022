import { Container, Row } from "react-bootstrap";

import "./style.css";

export function Footer() {
  return (
    <section className="footer">
      <Container>
        <Row className="align-items-center">
            <span>Guilherme Cardoso - Desenvolvedor Front-End</span>
        </Row>
      </Container>
    </section>
  );
}
