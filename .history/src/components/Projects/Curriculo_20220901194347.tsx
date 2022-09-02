import { Container, Row, Col } from "react-bootstrap";

export function Curriculo() {
  return (
    <Container>
        <Col className="curriculo">
          <h2>Experiência</h2>
          <ul>
            <li>
              <h5>Supermercado Barcelos Ltda</h5>
              <h5>Assistente administrativo</h5>
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
              <h5>Supermercado Barcelos Ltda</h5>
              <h5>Auxiliar administrativo</h5>
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
    </Container>
  );
}
