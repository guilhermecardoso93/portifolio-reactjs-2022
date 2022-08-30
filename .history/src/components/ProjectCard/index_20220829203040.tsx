import { Col, Nav } from "react-bootstrap";

interface ProjectCardInter {
  title: string;
  url: string;
  img: string;
  repo: string;
}

export function ProjectCard({ title, url, img, repo}: ProjectCardInter) {
  console.log(ul)
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={img} />
        <h4>{title}</h4>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <Nav.Link href={url} target='_blank'>site do projeto</Nav.Link>
          <Nav.Link href={repo} target='_blank'>site do repositório</Nav.Link>
          <h4>{title}</h4>
        </div>
      </div>
    </Col>
  );
}
