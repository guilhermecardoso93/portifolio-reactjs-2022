import { Col, Container, Row, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { ProjectCard } from "../ProjectCard";
import { projects } from "./projects";
import TrackVisibility from 'react-on-screen';
//import 'animate.css';

import "./style.css";

export function Projects() {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projetos</h2>
            <p>
              Lorem ipsu445m dolor sit amet consectetur adipisicing elit.
              Repudiandae, quo obcaecati fugiat blanditiis ratione, dolor esse
              sint eligendi, amet nesciunt vitae. Ea vero corrupti debitis nam
              placeat nostrum dolorum nisi.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link  eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" disabled>
                    Tab 3
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content  id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...projects}
                          repo={project.repo}
                          img={project.img}
                          title={project.img}
                          url={project.url}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="section">Guilherme</Tab.Pane>
                <Tab.Pane eventKey="third">Cardoso</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src='https://images.pexels.com/photos/207529/pexels-photo-207529.jpeg?auto=compress&cs=tinysrgb&w=1600'></img>
    </section>
  );
}
