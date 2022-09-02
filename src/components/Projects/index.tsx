import { Col, Container, Row, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { ProjectCard } from "../ProjectCard";
import { projects } from "./projects";
import TrackVisibility from "react-on-screen";
<<<<<<< HEAD
=======

>>>>>>> d9f37636aaf64b3e65e12253873109ea8ccca080

import "./style.css";
import { Curriculo } from "./Curriculo";

export function Projects() {
  return (
    <section className="project" id="project">
      <Container className="justify-content-center">
        <Row>
          <Col size={12}>
            <div className="projectTitle">
              <h2>Projetos</h2>
              <p>
                Projetos feitos a partir dos exercícios dos curso da Rocketseat
                e projetos do Youtube e Live de outros desenvolvedores.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
<<<<<<< HEAD
                  <Nav.Item>
                    <Nav.Link eventKey="first">Projetos</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Currículo</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...projects}
                            repo={project.repo}
                            img={project.img}
                            title={project.title}
                            url={project.url}
                          />
                        );
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Curriculo />
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
=======
                  <h2>Projetos</h2>
                  <p>
                    Projetos feitos a partir dos exercícios dos curso da
                    Rocketseat, projetos do Youtube e Live de outros
                    desenvolvedores.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projetos</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Currículo</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...projects}
                                repo={project.repo}
                                img={project.img}
                                title={project.title}
                                url={project.url}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Curriculo />
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
>>>>>>> d9f37636aaf64b3e65e12253873109ea8ccca080
          </Col>
        </Row>
      </Container>
    </section>
  );
}
