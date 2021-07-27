import React from "react";
import { Link } from "react-router-dom";
import "../../../../node_modules/nes.css/css/nes.css";

export default function LandingButton() {
	return (
		<Link to="/aboutme">
			<button className="nes-btn">Bienvenida/o</button>
		</Link>
	);
}
