import React, { useState } from 'react';
import Header from "./sub-components/Header";
import './Contacts.css'; // Crie este arquivo

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
        </div>
    );
};

export default Contacts;