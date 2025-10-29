import React from "react";
import { Helmet } from "react-helmet";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import Header from "./components/sub-components/Header"
import Homepag from "./components/Homepag";
import "./style.css"

function App() {
  return (
    <>
      <Helmet>
        <title>Júlia Carlini • Web Developer & Cybersecurity</title>
        <meta
          name="description"
          content="Portfólio de Júlia Carlini — desenvolvimento web e cibersegurança"
        />
        <meta property="og:title" content="Portfólio de Júlia Carlini" />
        <meta
          property="og:description"
          content="Projetos de desenvolvimento web e segurança digital"
        />
        <meta property="og:image" content="/images/portfolio-thumbnail.png" />
      </Helmet>

      <Header/>

      <main className="main-content">
        <Homepag/>
        <About />
        <Projects />
        <Contact />
      </main>

      <a href="#contact" className="fixed-contact-btn">
        Contactar
      </a>
    </>
  );
}

export default App;

