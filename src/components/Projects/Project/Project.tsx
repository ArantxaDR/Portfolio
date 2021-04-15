import "./_project.scss";
import pc from "../../../assets/computadora.png";
import disk from "../../../assets/floppy.png";

export default function Project({ project }: { project: any }) {
  return (
    <div className="project-container" key={project.id}>
      <h4 className="project-container__title">{project.name}</h4>
      <img
        className="project-container__img"
        src={project.preview}
        alt={project.alt}
      />
      <p className="project-container__text">{project.description}</p>

      <ul className="project-container__list">
        <li className="project-container__listItem">
          <a
            target="_blank"
            rel="noreferrer"
            href={project.webpage}
            title="Demo">
            <img
              className="icon"
              src={pc}
              alt="Icono ordenador"
              title="Ordenador"
            />
          </a>
        </li>
        <li className="project-container__listItem">
          <a
            target="_blank"
            rel="noreferrer"
            href={project.repository}
            title="Repository">
            <img
              className="icon"
              src={disk}
              alt="Icono disquete"
              title="Floppy-disk"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
