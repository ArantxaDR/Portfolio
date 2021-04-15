import { Link } from "react-router-dom";
import "./_landingBtn.scss";

export default function LandingButton() {
  return (
    <Link to="/aboutme">
      <button className="container-btn">Bienvenidos</button>
    </Link>
  );
}
