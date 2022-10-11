/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./_aboutme.scss";
import "../../../node_modules/nes.css/css/nes.css";
import avatar from "../../assets/Arantxa.jpg";
import avatar8bits from "../../assets/Arantxa8bits.jpg";

const openingText = (
	<p>¡Hola mundo! Mi nombre es Arantxa y soy desarrolladora frontend. Estoy continuamente aprendiendo y la programación me anima a superar retos día a día.
	</p>
);

const newText = (
	<p><strong>Lenguajes</strong>: React, Typescript, HTML, CSS, JS, Vue, Material-UI.<br/><strong>Skills</strong>: Trabajo en equipo, empática, comprometida, actitud positiva, ilusión.<br/><strong>Aprendiendo</strong>: Angular.
	</p>
);

const Aboutme = () => {
	const [picture, setPicture] = useState(true);

	const [text, setText] = useState(true);

	return (
		<div className="aboutme-wrapper">
			<section className="gameboy nes-container with-title is-centered">
				<p className="power"></p>
				<div className="screen-container">
					<div className="screen">
						<img
							className="screen_photo "
							src={picture ? avatar : avatar8bits}
							alt="Foto de Arantxa Delgado"
							title="Arantxa Delgado"
						/>

						<div className="nes-container is-rounded screen_text">
							{text ? openingText : newText}
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
						<button className=" nes-btn controls-container_btn__check">Proyectos</button>
					</Link>
					<Link to="/contact">
						<button className="nes-btn controls-container_btn__check">Contacto</button>
					</Link>
				</div>
				<div className="controls-container_AB">
					<button
						className="controls-container_AB__A"
						onClick={() => setPicture(!picture)}>A</button>
					<button
						className="controls-container_AB__B"
						onClick={() => setText(!text)}>B</button>
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
