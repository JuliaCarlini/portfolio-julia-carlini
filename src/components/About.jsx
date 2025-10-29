import React from "react";
import iconf1 from "../img/iconf1.png";
import iconf2 from "../img/iconf2.png"

export default function About() {
  return (
    <div className="about-div" >
      <h2 className="about-titulo">Sobre mim</h2>

      <section id="about" className="about-section">
      <div className="about-cards">

        <div className="about-card">
          <h3 className="about-subtitle">Missão</h3>
          <p className="about-p">
            Contribuir para que empresas e pessoas estejam seguras no mundo digital,
            oferecendo soluções de desenvolvimento web robustas, visuais atrativos e 
            proteção rigorosa contra vulnerabilidades.
          </p>
        </div>

        <div className="about-card">
          <h3 className="about-subtitle">Valores</h3>
          <ul className="about-list">
            <li>Disciplina e foco (aprendidos no kickboxing de alto rendimento)</li>
            <li>Segurança e responsabilidade em cada projeto</li>
            <li>Criatividade e inovação tecnológica</li>
            <li>Compromisso com resultados e aprendizado contínuo</li>
          </ul>
        </div>

        <div className="about-card">
          <h3 className="about-subtitle">Skills / Diferenciais</h3>
          <ul className="about-list">
            <li>Desenvolvimento Frontend: React, HTML, CSS, JavaScript</li>
            <li>Cibersegurança: análise de vulnerabilidades, boas práticas de proteção</li>
            <li>Design responsivo e UX/UI</li>
            <li>Disciplina e foco para entregar resultados de qualidade</li>
          </ul>
        </div>

        <div className="about-card">
          <h3 className="about-subtitle">Mini Bio</h3>
          <p className="about-p">
            Sou Júlia Carlini, apaixonada por tecnologia e atleta de alto rendimento em
            kickboxing. Combino disciplina, criatividade e segurança em cada projeto que
            desenvolvo, sempre buscando impacto real e aprendizado contínuo.
          </p>
        </div>

      </div>
    </section>
        <section className="education-section">
    <h2 className="about-titulo">Estudos Adquiridos</h2>
    <div className="education-cards">
      <div className="education-card">
        <img src={iconf1} alt="TESP Cibersegurança"/>
        <p>TESP Cibersegurança e Redes Informáticas</p>
        <h3>Politécnico de Leiria</h3>
      </div>

      <div className="education-card">
        <img src={iconf2} alt="WEB Design"/>
        <p>WEB Design</p>
        <h3>Udemy</h3>
      </div>

      <div className="education-card">
        <img src={iconf2} alt="React + Redux"/>
        <p>React + Redux</p>
        <h3>Udemy</h3>
      </div>
    </div>
  </section>

    </div>
  );
}