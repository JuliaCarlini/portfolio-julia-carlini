import React from "react";

import { useNavigate } from 'react-router-dom';
import processador from "../img/processador.jpg";


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
        </div>
    );
};

export default Homepag;