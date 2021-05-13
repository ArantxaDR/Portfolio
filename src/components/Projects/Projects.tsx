//components
import Back from "../Buttons/backBtn/Back";
import ProjectData from "../../data/projects.json";
import Project from "./Project/Project";

//styles
import "./_projects.scss";
import "../../../node_modules/nes.css/css/nes.css";

const Projects = () => {
  return (
    <div className="projects-wrapper">
      <header className="projects-header">
        <div className="projects-header__btn">
          <Back />
        </div>
        <h1 className="projects-header__title">Proyectos</h1>
      </header>
      <div className="projects-list">
        {ProjectData.map((project: any, id: number) => (
          <Project project={project} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
