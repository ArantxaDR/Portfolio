import "./styles/_App.scss";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Aboutme from "./components/AboutMe/Aboutme";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about-me" component={Aboutme} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
