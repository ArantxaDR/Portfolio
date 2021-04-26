//styles
import "./_project.scss";
import "../../../../node_modules/nes.css/css/nes.css";

export default function Project({ project }: { project: any }) {
  return (
    <div className="project-container">
      <h3 className="project-container__title nes-text is-error">
        {project.name}
      </h3>
      <img
        className="project-container__img"
        src={project.preview}
        alt={project.alt}
      />
      <ul className="project-container__text">
        <li>{project.description}</li>
        <li>{project.description2}</li>
        <li>{project.description3}</li>
      </ul>

      <ul className="project-container__list">
        <li className="project-container__listItem">
          <a
            target="_blank"
            rel="noreferrer"
            href={project.webpage}
            title="Demo">
            <i className="nes-logo is-small" title="Enlace a la demo"></i>
          </a>
        </li>
        <li className="project-container__listItem">
          <a
            target="_blank"
            rel="noreferrer"
            href={project.repository}
            title="Repository">
            <i
              className="nes-octocat animate is-small"
              title="Enlace al reporsitorio"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
