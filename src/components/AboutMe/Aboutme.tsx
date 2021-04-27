import { Link } from "react-router-dom";
import "./_aboutme.scss";
import "../../../node_modules/nes.css/css/nes.css";
import Arantxa from "../../assets/Arantxa.jpg";

const Aboutme = () => {
  return (
    <div className="aboutme-wrapper">
      <section className="gameboy nes-container with-title is-centered">
        <p className="power"></p>
        <div className="screen-container">
          <div className="screen">
            <img
              className="screen_photo"
              src={Arantxa}
              alt="Arantxa Delgado"
              title="Arantxa Delgado"
            />
            <div className="nes-container is-rounded screen_text">
              <p>
                ¡Hola mundo! Mi nombre es Arantxa y soy desarrolladora frontend
                jr. Me he reinventado como programadora y estoy descubriendo un
                mundo apasionante, lleno de retos y posibilidades.
              </p>
            </div>
          </div>
        </div>
        <div className="controls-container">
          <div className="controls-container_direction">
            <div className="controls-container_direction__vertical"></div>
            <div className="controls-container_direction__horizontal"></div>
          </div>
        </div>
        <div className="controls-container_btn">
          <Link to="/projects">
            <button className=" nes-btn controls-container_btn__check">
              Proyectos
            </button>
          </Link>

          <Link to="/contact">
            <button className="nes-btn controls-container_btn__check">
              Contacto
            </button>
          </Link>
        </div>
        <div className="controls-container_AB">
          <button className="controls-container_AB__A">A</button>
          <button className="controls-container_AB__B">B</button>
        </div>
        <div className="speakers">
          <div className="speakers-1"></div>
          <div className="speakers-2"></div>
          <div className="speakers-3"></div>
          <div className="speakers-4"></div>
        </div>
      </section>
    </div>
  );
};

export default Aboutme;
