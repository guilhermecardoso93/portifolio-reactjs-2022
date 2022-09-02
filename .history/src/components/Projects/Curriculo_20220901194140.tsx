import { Container, Row, Col } from "react-bootstrap";

export function Curriculo() {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Experiência</h2>
          <ul>
            <li>
              <h4>Supermercado Barcelos Ltda</h4>
              <h4>Assistente administrativo</h4>
              <p>Janeiro de 2016 - Atual (6 anos 9 meses)</p>
              <p>Cabo Frio, Rio de Janeiro, Brasil</p>
              <ul>
                <li>Lançamento, emissão e recebimento de Notas Fiscais </li>
                <li>Contas a Pagar</li>
                <li>Recebimento de Mercadoria</li>
                <li>Departamento Pessoal </li>
                <li>Supervisão de Equipe </li>
              </ul>
            </li>
            <li>
              <h4>Supermercado Barcelos Ltda</h4>
              <h4>Auxiliar administrativo</h4>
              <p>maio de 2012 - junho de 2015 (3 anos 2 meses)</p>
              <p>Cabo Frio, Rio de Janeiro, Brasil</p>
              <ul>
                <li>Lançamento, emissão e recebimento de Notas Fiscais </li>
                <li>Contas a Pagar</li>
                <li>Recebimento de Mercadoria</li>
                <li>Departamento Pessoal </li>
              </ul>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
