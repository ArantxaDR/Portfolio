//Router
import { Route } from "react-router-dom";

//Components
import Landing from "./components/Landing/Landing";
import Aboutme from "./components/AboutMe/Aboutme";
import Footer from "./components/Footer/Footer";

//Styles
import "./styles/_App.scss";

function App() {
  return (
    <>
      <main>
        <Route exact path="/" component={Landing} />
        <Route path="/aboutme" component={Aboutme} />
        <Footer />
      </main>
    </>
  );
}

export default App;
