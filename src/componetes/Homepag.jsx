import React from "react";
import './Homepag.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom'; // Adicione se não estiver no Header
import Header from "./sub-components/Header";

const Homepag = () => {
    const navigate = useNavigate();

    const goToProjects = () => {
        navigate("/Projects");
    };

    return (
        <div>
            <div className="pag-p">
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
                <section className="text-p">
                    <h1>Hi, I'm Julia Carlini</h1>
                    <h2>Web Developer</h2>
                    <p>Lorem ipsum dolor sit amet. Cum Quis recusandae qui voluptatem enim At dolor provident eum voluptatem beatae. Especializo-me em React, HTML, CSS e JavaScript.</p>
                    <button onClick={goToProjects}>Projects</button>
                </section>
            </div>
        </div>
    );
};

export default Homepag;