import React from "react";
import LandingButton from "../Buttons/landingBtn/LandingButton";
import TypeWriter from "./TypeWriter";

import pixelme from "../../assets/pixelme.png";

import "./_landing.scss";

const phrases = "Hola, mi nombre es Arantxa y soy desarrolladora frontend.";
export default function Landing() {
	return (
		<div className=" landing-wrapper">
			<div className="landing-wrapper__nes">
				<main className=" nes-balloon from-left">
					<TypeWriter phrases={phrases} />
				</main>
				<figure className="landing-wrapper__avatar">
					<img
						src={pixelme}
						alt="Avatar en pixelart de Arantxa"/>
				</figure>
				<div className="btn">
					<LandingButton />
				</div>
			</div>
		</div>
	);
}
