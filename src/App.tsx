import "./styles/_App.scss";
import { Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Aboutme from "./components/AboutMe/Aboutme";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <main>
        <Route exact path="/" component={Landing} />
        <Route exact path="/aboutme" component={Aboutme} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />

        <Footer />
      </main>
    </>
  );
}

export default App;
