//component
import Back from "../Buttons/backBtn/Back";

//styles
import "./_contact.scss";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="heart-container">
        <i className="nes-icon is-medium heart"></i>
        <i className="nes-icon is-medium heart"></i>
        <i className="nes-icon is-medium is-half heart"></i>
      </div>
      <section className="section-container">
        <h1 className="section-container__title">Es peligroso salir solo.</h1>
        <h2 className="section-container__title">Usa esto</h2>
        <p className="section-container__text">
          Tanto si estás buscando una desarrolladora frontend para una
          nueva aventura como si crees que podemos colaborar y compartir
          conocimientos, no dudes en contactar.
        </p>
        <ul className="section-container__contactList">
          <li className="section-container__contactListItem mail">
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:arantxaderuiz@gmail.com"
              title="Send email">
              <i className="nes-icon gmail is-large" title="Enlace a email"></i>
            </a>
          </li>
          <li className="section-container__contactListItem github">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ArantxaDR"
              title="Access GitHub">
              <i
                className="nes-icon github is-large"
                title="Enlace a Github"></i>
            </a>
          </li>
          <li className="section-container__contactListItem linkedin">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/arantxadelgadoruiz/"
              title="Access Linkedin">
              <i
                className="nes-icon linkedin is-large"
                title="Enlace a Linkedin"></i>
            </a>
          </li>
          <li className="section-container__contactListItem twitter">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/Chopper_hat"
              title="Access Twitter">
              <i
                className="nes-icon twitter is-large"
                title="Enlace a Twitter"></i>
            </a>
          </li>
          <li>
            <a
            target="_blank"
            rel="noreferrer"
              href="https://drive.google.com/file/d/1048FEmD_EvlduivrgwYmLH5Xk0Ndqpem/view?usp=sharing"
              className="nes-badge is-icon">
              <span className="is-dark">hi</span>
              <span className="is-warning">CV</span>
            </a>
          </li>
        </ul>
        <Back />
      </section>
    </div>
  );
};

export default Contact;
