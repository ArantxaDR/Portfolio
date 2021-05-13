//styles
import "./_project.scss";
import "../../../../node_modules/nes.css/css/nes.css";

export default function Project({ project }: { project: any }) {
  return (
    <div className="project-card">
      <figure className="card-figure">
        <img
          className="card-figure__img"
          src={project.preview}
          alt={project.alt}
        />
        <h3 className="card-figure__title nes-text is-error">{project.name}</h3>
        <ul className="card-figure__layer__text ">
          <li>{project.description}</li>
          <li>{project.description2}</li>
          <li>{project.description3}</li>
        </ul>

        <div className="card-figure__layer">
          <ul className="card-figure__layer__list">
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href={project.webpage}
                title="Demo">
                <span
                  className="nes-logo is-small"
                  title="Enlace a la demo"></span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href={project.repository}
                title="Repository">
                <span
                  className="nes-octocat animate is-small"
                  title="Enlace al reporsitorio"></span>
              </a>
            </li>
          </ul>
        </div>
      </figure>
    </div>
  );
}
