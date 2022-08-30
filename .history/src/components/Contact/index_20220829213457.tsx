import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ImgContact from '../../assets/contact.svg'

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
          <Col md={6}>
            <img src={ImgContact}'/>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
