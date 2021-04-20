import { Link } from "react-router-dom";
import "./_backBtn.scss";

export default function Back() {
  return (
    <Link to="/aboutme">
      <button className="back-btn">Volver</button>
    </Link>
  );
}
