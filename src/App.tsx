import "./styles/_App.scss";
import { Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Aboutme from "./components/AboutMe/Aboutme";

import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <main>
        <Route exact path="/" component={Landing} />
        <Route exact path="/aboutme" component={Aboutme} />
        <Footer />
      </main>
    </>
  );
}

export default App;
