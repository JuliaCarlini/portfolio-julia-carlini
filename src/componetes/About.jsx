import React from "react";
import Header from "./sub-components/Header";
import './About.css'; // Crie este arquivo

const About = () => {
    return (
        <div>
            <section className="about-section">
                <img src="https://via.placeholder.com/150" alt="Foto de Julia Carlini" /> {/* Substitua */}
                <div className="about-text">
                    <h2>Sobre Mim</h2>
                    <p>Olá, sou Julia Carlini, uma desenvolvedora web apaixonada por frontend. Lorem ipsum dolor sit amet. Cum Quis recusandae qui voluptatem enim At dolor provident eum voluptatem beatae. Especializo-me em HTML, CSS, JavaScript e frameworks como React.</p>
                </div>
            </section>
        </div>
    );
};

export default About;