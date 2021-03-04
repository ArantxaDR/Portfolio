import React, { useEffect, useState } from "react";
import LandingButton from "../Buttons/LandingButton";
import "./_landing.scss";
const phrases = [
  "Hello, my name is Arantxa",
  "I'm a front end developer.",
  "Welcome to my portfolio."
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
    }, Math.max(reverse ? 75 : subIndex === phrases[index].length ? 1000 : 150, Math.random() * 350));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <>
      <div className="container">
        <main className="container-title">
          <h1>{`${phrases[index].substring(0, subIndex)}${
            blink ? "|" : ""
          }`}</h1>
        </main>
        <LandingButton />
      </div>
    </>
  );
}
