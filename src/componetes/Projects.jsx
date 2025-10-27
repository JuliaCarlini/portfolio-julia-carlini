import React from "react";
import Header from "./sub-components/Header";
import './Projects.css'; // Crie este arquivo CSS

const Projects = () => {
    const projects = [
        {
            title: "Projeto 1: Site Responsivo",
            desc: "Descrição breve. Tecnologias: HTML, CSS, JS.",
            img: "https://via.placeholder.com/300x200", // Substitua por screenshot real
            demo: "#",
            github: "#"
        },
        {
            title: "Projeto 2: App React",
            desc: "Outro projeto incrível. Tecnologias: React, Node.js.",
            img: "https://via.placeholder.com/300x200",
            demo: "#",
            github: "#"
        }
        // Adicione mais
    ];

    return (
        <div>
            <section className="projects-section">
                <h2>Meus Projetos</h2>
                <div className="projects-grid">
                    {projects.map((proj, index) => (
                        <div key={index} className="project-card">
                            <img src={proj.img} alt={proj.title} />
                            <h3>{proj.title}</h3>
                            <p>{proj.desc}</p>
                            <a href={proj.demo} target="_blank" rel="noopener noreferrer">Ver Demo</a> | 
                            <a href={proj.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;