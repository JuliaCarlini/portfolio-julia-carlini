import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import animacao from "../img/animacao.mp4"

const Contacts = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Mensagem enviada! (Integre com Netlify Forms)');
        // Para Netlify: adicione name="form-name" no form e configure no painel
    };

    return (
        <div>
          <section className="contact-section">
                <h2>Contato</h2>
                <form onSubmit={handleSubmit} className="contact-form" name="contact" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="text" name="name" placeholder="Seu Nome" value={formData.name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Seu Email" value={formData.email} onChange={handleChange} required />
                    <textarea name="message" placeholder="Sua Mensagem" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </section>

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
            </div>
        </div>
    );
};

export default Contacts;