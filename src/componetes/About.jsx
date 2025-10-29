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
                    Sou uma profissional apaixonada por tecnologia, com foco em cibersegurança e desenvolvimento web. Tenho como propósito criar soluções seguras, funcionais e inovadoras, sempre buscando entender a fundo cada detalhe. </p>
                    <p className="about-p">Além da área tech, sou atleta de alto rendimento em kickboxing, o que moldou minha forma de pensar e agir: disciplina, estratégia e foco são valores que levo tanto para o tatame quanto para o código. Acredito que performance e precisão são conquistadas com treino constante.</p>
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