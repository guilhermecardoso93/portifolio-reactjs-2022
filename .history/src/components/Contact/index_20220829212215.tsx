import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export function Contact() {
  const formInicialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInicialDetails);
  const [buttonText, setButtonText] = useState("Enviar");
  const [status, setStatus] = useState({});

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}></Col>
        </Row>
      </Container>
    </section>
  );
}
