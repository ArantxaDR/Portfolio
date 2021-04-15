import Back from "../Buttons/backBtn/Back";
import ProjectData from "../../data/projects.json";
import Project from "./Project/Project";
import "./_projects.scss";

console.log(ProjectData);
const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <h1 className="projects-container__title">Proyectos</h1>
        <div className="projects-container__list">
          {ProjectData.map((project: any) => (
            <Project project={project} />
          ))}
        </div>
      </div>

      <Back />
    </>
  );
};

export default Projects;
