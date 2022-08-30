import { Col } from "react-bootstrap";

interface ProjectCardInter {
  title: string;
  url: string;
  img: string;
  repo: string;
}

export function ProjectCard({ title, url, img, repo}: ProjectCardInter) {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={img} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <a ref={url} target='_blank'>site do projeto</a>
          <a ref={repo}>link do repositório Git Hub</a>
        </div>
      </div>
    </Col>
  );
}
