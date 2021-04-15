import "./_project.scss";

export default function Project({ project }: { project: any }) {
  return (
    <div className="project-container" key={project.id}>
      <header className="project-container__title">{project.name}</header>
      <img
        className="project-container__img"
        src={project.preview}
        alt={project.alt}
      />
      <p className="project-container__text">{project.description}</p>
      <ul className="project-container__list">
        <li className="project-container__listItem">{project.webpage}</li>
        <li className="project-container__listItem">{project.repository}</li>
      </ul>
      <p className="project-container__text">{project.technologies}</p>
    </div>
  );
}
