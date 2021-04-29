//styles
import "./_project.scss";
import "../../../../node_modules/nes.css/css/nes.css";

export default function Project({ project }: { project: any }) {
  return (
    <div className="project-card">
      <img
        className="project-card__img"
        src={project.preview}
        alt={project.alt}
      />
      <h3 className="project-card__title nes-text is-error">{project.name}</h3>
      <ul className="project-card__text scale">
        <li>{project.description}</li>
        <li>{project.description2}</li>
        <li>{project.description3}</li>
      </ul>
      <ul className="project-card__list">
        <li className="project-card__listItem">
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
