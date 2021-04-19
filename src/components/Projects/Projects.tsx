import Back from "../Buttons/backBtn/Back";
import ProjectData from "../../data/projects.json";
import Project from "./Project/Project";
import "./_projects.scss";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-container__btn">
        <Back />
      </div>
      <h1 className="projects-container__title">Proyectos</h1>
      <div className="projects-container__list">
        {ProjectData.map((project: any, id: number) => (
          <Project project={project} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
