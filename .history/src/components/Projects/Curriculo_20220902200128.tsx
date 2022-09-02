import { Container, Row, Col } from "react-bootstrap";

import "./style.css";

export function Curriculo() {
  return (
    <Container className="curriculo">
      <h2>Experiência</h2>
      <ul className="experience-main">
        <li>
          <h3>Supermercado Barcelos Ltda</h3>
          <h5>Assistente administrativo</h5>
          <span>
            Janeiro/2016 - Atual (6 anos 9 meses) <br />
            Cabo Frio, Rio de Janeiro, Brasil
          </span>
          <ul className="experience-sec">
            <p>
              Lançamento, emissão e recebimento de Notas Fiscais<br/>
              Contas a Pagar<br/>
              Recebimento de Mercadoria<br/>
              Departamento Pessoal <br/>
              Supervisão de Equipe
            </p>
          </ul>
        </li>
        <li>
          <h3>Supermercado Barcelos Ltda</h3>
          <h5>Auxiliar administrativo</h5>
          <span>
            Maio/2012 - Junho/2015 (3 anos 2 meses) <br />
            Cabo Frio, Rio de Janeiro, Brasil
          </span>

          <ul className="experience-sec">
            <li>Lançamento, emissão e recebimento de Notas Fiscais </li>
            <li>Contas a Pagar</li>
            <li>Recebimento de Mercadoria</li>
            <li>Departamento Pessoal </li>
          </ul>
        </li>
      </ul>
    </Container>
  );
}
