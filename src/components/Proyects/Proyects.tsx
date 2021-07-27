//components
import Back from "../Buttons/backBtn/Back";
import ProyectData from "../../data/proyects.json";
import Proyect from "./Proyect/Proyect";

//styles
import "./_proyects.scss";
import "../../../node_modules/nes.css/css/nes.css";

const Proyects = () => {
  return (
    <div className="proyects-wrapper">
     
        <div className="proyects-btn">
          <Back />
        </div>
        <h1 className="proyects-title">Proyectos</h1>
     
      <section className="proyects-list">
        {ProyectData.map((proyect: any, id: number) => (
          <Proyect proyect={proyect} key={id} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
