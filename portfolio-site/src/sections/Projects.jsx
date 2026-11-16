import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/projects";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-section">
      <div className="projects-heading">
        <p className="projects-eyebrow">SELECTED WORK</p>
        <h2>Projects</h2>
        <p className="projects-intro">
          From full-stack applications to machine learning and research, these
          projects reflect what I've built and explored through my studies and
          development work.
        </p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
