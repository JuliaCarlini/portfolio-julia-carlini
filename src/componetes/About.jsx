import React from "react";
import iconf1 from "../img/iconf1.png";
import iconf2 from "../img/iconf2.png"

const About = () => {
    return (
        <div>
            <section className="about-section">
                <div className="about-text">
                    <p className="about-titulo">Quem sou e o que faço</p>
                    <p className="about-p">O meu nome é Julia Carlini, <br />
                        apaixonada por tecnologia e atleta de alto rendimento
                        em kick boxing. Especializo-me em <strong>desenvolvimento web</strong> e
                        <strong> cibersegurança</strong>, unindo criatividade, método e
                        segurança em cada projeto.
                    </p>
                    <p className="about-p">Minha missão é contribuir para que empresas e pessoas possam estar
                        seguras no mundo digital — com soluções bem feitas, visuais atraentes e
                        rígidos cuidados com proteção.
                    </p>
                    <p className="about-p">Como atleta, desenvolvi disciplina, resiliência e foco — valores que
                        aplico em código e infraestrutura. Se você está buscando alguém que
                        pensa no design, na funcionalidade e também na segurança, estou pronta
                        para colaborar.
                    </p>
                </div>
            </section>

            <section className="about-card">
                <h1>ESTUDOS ADQUIRIDOS</h1>
                 <div className="projects-grid">
                        <div  className="project-card">
                            <img src={iconf1}/>
                            <p>TESP Cibersegurança e Redes Informaticas</p>
                            <h3>Politecnico de Leiria</h3>
                        </div>
                        <div  className="project-card">
                            <img src={iconf2}/>
                            <p>WEB Desing</p>
                            <h3>Udemy</h3>
                        </div>
                        <div  className="project-card">
                            <img src={iconf2}/>
                            <p>React + Redux</p>
                            <h3>Udemy</h3>
                        </div>
                </div>
            </section>
        </div>
    );
};

export default About;