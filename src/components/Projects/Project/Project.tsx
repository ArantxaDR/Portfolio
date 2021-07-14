//styles
import "./_project.scss";
import "../../../../node_modules/nes.css/css/nes.css";

export default function Project({ project }: { project: any }) {
  return (
  
      <div className="card">
        
        
        <h3 className="card-title nes-text is-error">{project.name}</h3>
        
        <img className="card-img"
          src={project.preview}
          alt={project.alt}
        /> 
       
      
                 
        <ul className="card-text ">
          <li>{project.description}</li>
          <li>{project.description2}</li>
        </ul>
                
        <ul className="card-icons">
          <li className="item">
            <a
                target="_blank"
                rel="noreferrer"
                href={project.webpage}
                title="Demo">
              <span
                  className="nes-logo is-small"
                  title="Enlace a la demo"></span>
            </a>
          </li>
          <li className="item">
            <a
              target="_blank"
              rel="noreferrer"
              href={project.repository}
              title="Repository">
              <span
                className="nes-octocat animate is-small"
                title="Enlace al reporsitorio"></span>
            </a>
          </li>
        </ul>
      </div>

    
  );
}
