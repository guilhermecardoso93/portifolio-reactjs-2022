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
      <img src={img} className='proj-imgbx'/>
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{url}</span>
        <span>{repo}</span>
      </div>
    </Col>
  );
}
