//Component
import LandingButton from "../Buttons/landingBtn/LandingButton";
import TypeWriter from "./TypeWriter";

//style
import "./_landing.scss";

const phrases = "Hola, mi nombre es Arantxa y soy desarrolladora frontend Jr.";
export default function Landing() {
  return (
    <div className=" landing-wrapper">
      <div className="landing-wrapper__nes">
        <main className=" nes-balloon from-left">
          <TypeWriter phrases={phrases} />
        </main>

        <div className="btn">
          <LandingButton />
        </div>
      </div>
    </div>
  );
}
