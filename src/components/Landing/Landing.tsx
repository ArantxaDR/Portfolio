//Component
import LandingButton from "../Buttons/landingBtn/LandingButton";
import TypeWriter from "./TypeWriter";
//imgs
import pixelme from "../../assets/pixelme.png";
//style
import "./_landing.scss";

const phrases = "Hola, mi nombre es Arantxa y soy desarrolladora frontend.";
export default function Landing() {
  return (
    <div className=" landing-wrapper">
      <div className="landing-wrapper__nes">
        <main className=" nes-balloon from-left">
          <TypeWriter phrases={phrases} />
        </main>
        <img
          className="landing-wrapper__img"
          src={pixelme}
          alt="Avatar en pixelart de Arantxa"
        />
        <div className="btn">
          <LandingButton />
        </div>
      </div>
    </div>
  );
}
