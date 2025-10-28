import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom'; // Adicione se não estiver no Header
import processador from "../img/processador.jpg";
import animacao from "../img/animacao.mp4"

const Homepag = () => {
    const navigate = useNavigate();

    const goToProjects = () => {
        navigate("/Projects");
    };

    return (
        <div>
            <div className="pag-p">
                <section className="text-p">
                    <h1>Olá, sou a Julia <br />
                    Carlini.</h1>
                    <p>Desenvolvedora Web + <br />
Recém licenciada em Cybersegurança e <br /> Redes informáticas</p>
                    <button onClick={goToProjects}>Veja o meu portfólio</button>
                </section>

                <img className="pag-img" src={processador} alt="" />
            </div>

            <div className="div-icons">
                <video className="animacao-icons" autoPlay loop muted playsInline>
                    <source src={animacao} type="video/mp4" />
                    Seu navegador não suporta vídeo. {/* Fallback */}
                </video>

                <section className="section-icons">
                    <a href="https://github.com/JuliaCarlini" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/carlini.julia/" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/julia-carlini" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:info@julia.dornelas.com" aria-label="Email">
                        <MdEmail />
                    </a>
                </section>

                <p className="sections-icons-p">Contatos</p>
            </div>
        </div>
    );
};

export default Homepag;