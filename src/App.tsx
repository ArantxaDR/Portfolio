//Router
import { Route } from "react-router-dom";

//Components
import Landing from "./components/Landing/Landing";
import Aboutme from "./components/AboutMe/Aboutme";
import Contact from "./components/Contact/Contact";
import Proyects from "./components/Proyects/Proyects";
import Footer from "./components/Footer/Footer";

//Styles
import "./styles/_App.scss";

function App() {
  return (
    <>
      <main>
        <Route exact path="/" component={Landing} />
        <Route path="/aboutme" component={Aboutme} />
        <Route path="/contact" component={Contact} />
        <Route path="/proyects" component={Proyects} />
        <Footer />
      </main>
    </>
  );
}

export default App;
