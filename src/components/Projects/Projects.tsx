/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import Back from "../Buttons/backBtn/Back";
import ProjectData from "../../data/projects.json";
import Project from "./Project/Project";

import "./_projects.scss";
import "../../../node_modules/nes.css/css/nes.css";

const Projects = () => {
	return (
		<div className="projects-wrapper">
     
			<div className="projects-btn">
				<Back />
			</div>
			<h1 className="projects-title">Proyectos</h1>
     
			<section className="projects-list">
				{ProjectData.map((project, id: number) => (
					<Project project={project} key={id} />
				))}
			</section>
		</div>
	);
};

export default Projects;
