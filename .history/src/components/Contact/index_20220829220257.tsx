import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ImgContact from "../../assets/contact.svg";

import "./style.css";

export function Contact() {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Enviar");
  const [status, setStatus] = useState({});

  function onFormUpdate(category: string, value: string) {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  }

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ success: true, message: "Mensagem Enviada com sucesso" });
    } else {
      setStatus({
        success: false,
        message: "Alguma coisa deu errado!",
      });
    }
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col>
            <h2>Entre Contato Comigo!</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="Primeiro Nome"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Sobrenome"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="E-mail"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Telefone"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <textarea
                    rows={6}
                    value={formDetails.message}
                    placeholder="Mensagem"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
          <Col md={6}>
            <img src={ImgContact} />
          </Col>
          {status.message && (
            <Col>
              <p className={status.success === false ? "danger" : "success"}>
                {status.message}
              </p>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
}
