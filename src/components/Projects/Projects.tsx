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
     
        <div className="projects-btn">
          <Back />
        </div>
        <h1 className="projects-title">Proyectos</h1>
     
      <section className="projects-list">
        {ProjectData.map((project: any, id: number) => (
          <Project project={project} key={id} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
