import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./data/projects";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projetos</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}

