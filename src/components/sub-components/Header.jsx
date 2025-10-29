import {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from "react";
import myImg from '../../perfil-cv.png';

const Header = () => {
const [isOpen, setIsOpen] = useState(false);
const navigate = useNavigate();

const Irhome = () => {
    navigate("/")
}
const IrAbout = () => {
    navigate("/About")
}
const IrProjects = () => {
    navigate("/Projects")
}
const IrContacts = () => {
    navigate("/Contacts")
}
return(
    <header>
        <img className="my-img" src={myImg} alt="my-Img" />
        <p className='header-p'>Julia Carlini</p>

        <button className={`toggle-btn ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "×" : "☰"}
        </button>
        <nav className={`nav ${isOpen ? "open" : ""}`}>
            <button onClick={Irhome}>Home</button>
            <button onClick={IrAbout}>About</button>
            <button onClick={IrProjects}>Projects</button>
            <button onClick={IrContacts}>Contacts</button>
        </nav>
    </header>
)
}

export default Header;