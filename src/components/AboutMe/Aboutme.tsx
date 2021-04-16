import { Link } from "react-router-dom";
import "./_aboutme.scss";

import Arantxa from "../../assets/Arantxa.jpg";

const Aboutme = () => {
  return (
    <div className="aboutme-wrapper">
      <main className="gameboy">
        <p className="power"></p>
        <div className="screen-container">
          <div className="screen">
            <img
              className="screen_photo"
              src={Arantxa}
              alt="Una mujer presentándose"
            />
            <p className="screen_title">Sobre mi</p>
            <p className="screen_text">
              ¡Hola mundo! Mi nombre es Arantxa y soy desarrolladora frontend
              jr. Hace poco que me he reinventado como programadora y estoy
              descubriendo un mundo apasionante, lleno de retos y posibilidades.
              Soy activa, resolutiva y empática, con ganas de aprender y aportar
              a este mundillo tech.
            </p>
          </div>
        </div>
        <div className="controls-container">
          <div className="controls-container_direction">
            <div className="controls-container_direction__vertical"></div>
            <div className="controls-container_direction__horizontal"></div>
          </div>
        </div>
        <div className="controls-container_btn">
          <div className="controls-container_btn__projects">
            <p className="controls-container_btn__projects___text">Proyectos</p>
            <Link to="/projects">
              <button className="controls-container_btn__check"></button>
            </Link>
          </div>
          <div className="controls-container_btn__contact">
            <p className="controls-container_btn__contact___text">Contacto</p>
            <Link to="/contact">
              <button className="controls-container_btn__check"></button>
            </Link>
          </div>
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
      </main>
    </div>
  );
};

export default Aboutme;
