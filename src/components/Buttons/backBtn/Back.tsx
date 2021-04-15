import { Link } from "react-router-dom";
import "../landingBtn/_landingBtn.scss";

export default function Back() {
  return (
    <Link to="/aboutme">
      <button className="container-btn">Volver</button>
    </Link>
  );
}
