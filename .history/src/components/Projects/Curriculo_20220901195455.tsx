import { Container, Row, Col } from "react-bootstrap";

import "./style.css";

export function Curriculo() {
  return (
    <Container className="curriculo">
      <h2>Experiência</h2>
      <ul className="experience-Main">
        <li>
          <h5>Supermercado Barcelos Ltda</h5>
          <h5>Assistente administrativo</h5>
          <span>
            Janeiro de 2016 - Atual (6 anos 9 meses) <br />
            Cabo Frio, Rio de Janeiro, Brasil
          </span>
          <ul className="experience-sec">
            <li>Lançamento, emissão e recebimento de Notas Fiscais </li>
            <li>Contas a Pagar</li>
            <li>Recebimento de Mercadoria</li>
            <li>Departamento Pessoal </li>
            <li>Supervisão de Equipe </li>
          </ul>
        </li>
        <li>
          <h5>Supermercado Barcelos Ltda</h5>
          <h5>Auxiliar administrativo</h5>
          <span>
            maio de 2012 - junho de 2015 (3 anos 2 meses) <br />
            Cabo Frio, Rio de Janeiro, Brasil
          </span>

          <ul className="expUl">
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
