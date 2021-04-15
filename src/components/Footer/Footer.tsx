import gameicon from "../../assets/consola.png";
import "./_footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <small>
        Made with{" "}
        <img className="footer-img" src={gameicon} alt="Video game icon" /> by
        &copy; AratxaDR 2021
      </small>
    </footer>
  );
};

export default Footer;
