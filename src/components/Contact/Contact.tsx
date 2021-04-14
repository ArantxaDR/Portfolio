import React from "react";
import Back from "../Buttons/backBtn/Back";
import mail from "../../assets/gmail.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import codepen from "../../assets/codepenlogo.png";
import "./_contact.scss";

const Contact = () => {
  return (
    <div className="container">
      <section className="section-container">
        <h1 className="section-container__title">Es peligroso salir solo.</h1>
        <h2 className="section-container__title">Usa esto</h2>
        <p className="section-container__text">
          Tanto si estás buscando una desarrolladora frontend junior para una
          nueva aventura como si crees que podemos colaborar y compartir
          conocimientos, no dudes en contactar.
        </p>
        <ul className="section-container__contactList">
          <li className="section-container__contactListItem mail">
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:arantxaderuiz@gmail.com"
              title="Send email">
              <img
                className="icon"
                src={mail}
                alt="Icono email"
                title="Logo Email"
              />
            </a>
          </li>
          <li className="section-container__contactListItem github">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ArantxaDR"
              title="Access GitHub">
              <img
                className="icon"
                src={github}
                alt="Icono github"
                title="Logo Github"
              />{" "}
            </a>
          </li>
          <li className="section-container__contactListItem linkedin">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/arantxadelgadoruiz/"
              title="Access Linkedin">
              <img
                className="icon"
                src={linkedin}
                alt="Icono linkedin"
                title="Logo Linkedin"
              />
            </a>
          </li>
          <li className="section-container__contactListItem codepen">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://codepen.io/arantxadr"
              title="Access Codepen">
              <img
                className="icon"
                src={codepen}
                alt="Icono codepen"
                title="Logo Codepen"
              />
            </a>
          </li>
        </ul>
      </section>
      <Back />
    </div>
  );
};

export default Contact;
