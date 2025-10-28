import React from "react";
import iconf1 from "../img/iconf1.png";
import iconf2 from "../img/iconf2.JPG"

const About = () => {
    return (
        <div>
            <section className="about-section">
                <div className="about-text">
                    <p className="about-titulo">Quem sou e o que faço</p>
                    <p className="about-p">O meu nome é Julia Carlini,
                    E eu amooo minha namorada ela é a menina mais linda do mundo e amo ela muito e vou pedir ela em casamento daqui a uns anos e vai ser lindo te amo momo (mudar...kkkk)</p>
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