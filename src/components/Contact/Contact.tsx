import React from "react";
import "./_contact.scss";
import Back from "../Buttons/backBtn/Back";
import mail from "../../assets/gmail.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import codepen from "../../assets/codepen.png";

const Contact = () => {
  return (
    <div className="contact-continer">
      <section className="section-container">
        <h3 className="section-container__title">
          Es peligroso salir solo. <span className="">Usa esto</span>
        </h3>
        <p className="section-container__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ullam,
          optio aut aliquam quidem veniam corporis sint non consectetur
          accusamus ad deleniti est ab repudiandae ipsam quae neque perferendis.
          Quisquam.
        </p>
        <ul className="section-container__contactList">
          <li className="section-container__contactListItem mail">
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:arantxaderuiz@gmail.com"
              title="Send email">
              <img src={mail} alt="Icono email" title="Logo Email" />
            </a>
          </li>
          <li className="section-container__contactListItem github">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ArantxaDR"
              title="Access GitHub">
              <img src={github} alt="Icono github" title="Logo Github" />{" "}
            </a>
          </li>
          <li className="section-container__contactListItem linkedin">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/arantxadelgadoruiz/"
              title="Access Linkedin">
              <img src={linkedin} alt="Icono linkedin" title="Logo Linkedin" />
            </a>
          </li>
          <li className="section-container__contactListItem codepen">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://codepen.io/arantxadr"
              title="Access Codepen">
              <img src={codepen} alt="Icono codepen" title="Logo Codepen" />
            </a>
          </li>
        </ul>
      </section>
      <Back />
    </div>
  );
};

export default Contact;
