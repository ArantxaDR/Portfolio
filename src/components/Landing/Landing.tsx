//Hooks
import { useEffect, useState } from "react";

//Component
import LandingButton from "../Buttons/landingBtn/LandingButton";

//style
import "./_landing.scss";

const phrases = [
  "Hola, mi nombre es Arantxa.",
  "Soy desarrolladora frontend Jr.",
  "Bienvenida/o a mi portfolio."
];

export default function Landing() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // typeWriter
  useEffect(() => {
    if (index === phrases.length) return;

    if (
      subIndex === phrases[index].length + 1 &&
      index !== phrases.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === phrases[index].length ? 900 : 150, Math.random() * 350));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 300);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <div className=" landing-wrapper">
      <div className="landing-wrapper__nes">
        <main className=" nes-balloon from-left">
          <h2>{`${phrases[index].substring(0, subIndex)}${
            blink ? "|" : ""
          }`}</h2>
        </main>

        <div className="btn">
          <LandingButton />
        </div>
      </div>
    </div>
  );
}
