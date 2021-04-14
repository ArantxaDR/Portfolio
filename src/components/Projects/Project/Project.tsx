import React from "react";
import "./_project.scss";
import rick from "../../../assets/Rick.png";
export default function Project() {
  return (
    <div className="projects-container">
      <header className="projects-container__title">Rick y Morty </header>
      <img
        className="projects-container__img"
        src={rick}
        alt="Imagen de la aplicación de Rick y Morty"
      />
      <p className="projects-container__text">
        Explicación del projecto con stack tecnológico
      </p>
      <ul className="projects-container__list">
        <li className="projects-container__listItem">web</li>
        <li className="projects-container__listItem">Repo</li>
      </ul>
      <p className="projects-container__text">tecnologias</p>
    </div>
  );
}
