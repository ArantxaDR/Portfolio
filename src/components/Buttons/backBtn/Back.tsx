import { Link } from "react-router-dom";
import "../../../../node_modules/nes.css/css/nes.css";

export default function Back() {
  return (
    <Link to="/aboutme">
      <button className="nes-btn">Volver</button>
    </Link>
  );
}
