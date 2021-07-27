//styles
import "./_proyect.scss";
import "../../../../node_modules/nes.css/css/nes.css";

export default function Proyect({ proyect }: { proyect: any }) {
  return (
  
      <div className="card">
        
        
        <h3 className="card-title nes-text is-error">{proyect.name}</h3>
        
        <img className="card-img"
          src={proyect.preview}
          alt={proyect.alt}
        /> 
       
      
                 
        <ul className="card-text ">
          <li>{proyect.description}</li>
          <li>{proyect.description2}</li>
        </ul>
                
        <ul className="card-icons">
          <li className="item">
            <a
                target="_blank"
                rel="noreferrer"
                href={proyect.webpage}
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
              href={proyect.repository}
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
